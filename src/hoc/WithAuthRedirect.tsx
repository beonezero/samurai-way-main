import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType) : MapStateToPropsType=> {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirect = (Component: any) => {
    function RedirectComponent(props: MapStateToPropsType) {
        if (!props.isAuth) {
            return <Redirect to={"login"}/>
        }
        return <Component {...props}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent

}

