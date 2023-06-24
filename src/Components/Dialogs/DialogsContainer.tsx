import s from "./Dialogs.module.css"
import React from "react";
import {StoreType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

// type DialogsContainerPropsType = {
//     store: StoreType
// }

export const DialogsContainer = () => {

    return <StoreContext.Consumer>
            { (store) => {
                const onChangeMessageText = (e: string) => {
                    store.dispatch(updateNewMessageTextAC(e))
                }
                const addMessage = () => {
                   store.dispatch(addMessageAC())
                }
                return <Dialogs dialogsPage={store.getState().dialogsPage}
                             addMessage={addMessage}
                             onChangeMessageText={onChangeMessageText}
                    />
            }
        }
        </StoreContext.Consumer>
}