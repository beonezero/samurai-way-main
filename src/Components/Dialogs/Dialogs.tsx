import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}
const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Yauheni"} id={1}/>
                <DialogItem name={"Sophia"} id={2}/>
                <DialogItem name={"Eva"} id={3}/>
                <DialogItem name={"Ivan"} id={4}/>
                <DialogItem name={"Alex"} id={5}/>
                <DialogItem name={"Artemii"} id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hello"}/>
                <Message message={"How do you do?"}/>
                <Message message={"Where are you from"}/>
            </div>
        </div>
    )
}