import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type mapStateToProps = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

export type HeaderContainerPropsType = mapStateToProps & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }
    render () {
        return <Header {...this.props}/>
    }

}
const mapStateToProps = (state: AppStateType): mapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)