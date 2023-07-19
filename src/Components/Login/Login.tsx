import React from 'react';
import {Field, reduxForm} from "redux-form";

export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={"input"} name={"login"} placeholder={"Login"}/></div>
            <div><Field component={"input"} name={"password"} type={"password"} placeholder={"Password"}/></div>
            <div><Field component={"input"} name={"rememberMe"} type="checkbox"/> remember me</div>
            <div>
                <button>Sign In</button>
            </div>
        </form>
    )
};

export const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

export const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};