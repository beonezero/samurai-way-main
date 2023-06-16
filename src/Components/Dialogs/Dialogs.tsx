import s from "./Dialogs.module.css"
import React, {RefObject} from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {addMessage, DialogsPageType, DialogsType, MessagesType, RootStateType} from "../../redux/state";

type AddPostType = {
    addPost: (postMessage: string) => void
}

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    addMessage: (postMessage: string) => void

}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    const refAreaMessage = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        if (refAreaMessage.current) {
            props.addMessage(refAreaMessage.current.value)
        }
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={refAreaMessage}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}