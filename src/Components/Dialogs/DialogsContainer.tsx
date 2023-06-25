import React from "react";
import {RootStateType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

// type DialogsContainerPropsType = {
//     store: StoreType
// }

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        onChangeMessageText: (e: string) => {
            dispatch(updateNewMessageTextAC(e))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)