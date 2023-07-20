import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)

export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} name={"login"}
                        placeholder={"Login"} validate={[required, maxLength10]}/></div>
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

export const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};