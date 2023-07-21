import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type mapStateToProps = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

export type HeaderContainerPropsType = mapStateToProps & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render () {
        return <Header {...this.props}/>
    }

}
const mapStateToProps = (state: AppStateType): mapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)