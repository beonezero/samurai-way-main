import s from "./Dialogs.module.css"
import React from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    const addNewMessage = (values: any) => {
        props.addMessage(values.newMessageBody)
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
                <MessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength5 = maxLengthCreator(5)

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newMessageBody"}
                   placeholder={"type your message"} validate={[required, maxLength5]} />
            <button onClick={props.addMessage}>Send</button>
        </form>
    )
};

const MessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)