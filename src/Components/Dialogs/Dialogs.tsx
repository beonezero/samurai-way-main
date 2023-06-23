import s from "./Dialogs.module.css"
import React, {ChangeEvent, RefObject} from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionType, DialogsType, MessagesType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";

type AddPostType = {
    addPost: (postMessage: string) => void
}

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    dispatch: (action: ActionType) => void

}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messages.map(m => <Message message={m.message}/>)


    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }
    const addMessage = () => {
        props.dispatch(addMessageAC())
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
                          value={props.newMessageText}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}