import s from "./Dialogs.module.css"
import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)


    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessageText(e.currentTarget.value)
    }
    const addMessage = () => {
        props.addMessage()
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
                <textarea placeholder={"type your message"} onChange={onChangeMessageText}
                          value={props.dialogsPage.newMessageBody}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}