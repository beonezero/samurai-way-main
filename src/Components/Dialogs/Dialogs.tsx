import s from "./Dialogs.module.css"
import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)


    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessageText(e.currentTarget.value)
    }
    const addMessage = () => {
        props.addMessage()
    }

    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <div>
                <MessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newMessageBody"} placeholder={"type your message"} />
            <button onClick={props.addMessage}>Send</button>
        </form>
    )
};

const MessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)