import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect, DefaultRootState} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

const maxLength10 = maxLengthCreator(20)

export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} name={"email"}
                        placeholder={"Email"} validate={[required, maxLength10]}/></div>
            <div><Field component={Input} name={"password"} type={"password"}
                        placeholder={"Password"} validate={[required, maxLength10]}/></div>
            <div><Field component={Input} name={"rememberMe"} type="checkbox"/> remember me</div>
            <div>
                <button>Sign In</button>
            </div>
        </form>
    )
};

export const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)