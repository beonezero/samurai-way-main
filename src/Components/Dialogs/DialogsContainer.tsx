import React from "react";
import {addMessageAC, InitialStateDialogPageType, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: InitialStateDialogPageType
}
type mapDispatchToPropsType = {
    onChangeMessageText: (e: string) => void
    addMessage: () => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType) : mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onChangeMessageText: (e: string) => {
            dispatch(updateNewMessageTextAC(e))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs)


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)