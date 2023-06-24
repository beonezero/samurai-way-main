import s from "./Dialogs.module.css"
import React from "react";
import {StoreType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type AddPostType = {
    addPost: (postMessage: string) => void
}

type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {
    const state = props.store.getState().dialogsPage
    const onChangeMessageText = (e: string) => {
        props.store.dispatch(updateNewMessageTextAC(e))
    }
    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    return (<Dialogs dialogsPage={state}
                     addMessage={addMessage}
                     onChangeMessageText={onChangeMessageText}
    />)
}