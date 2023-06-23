import {ActionType, DialogsPageType, MessagesType} from "./store";

export const dialogsReducer = (state: DialogsPageType, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE" :
            const newMessage: MessagesType = {id: 7, message: state.newMessageBody}
            state.messages.push(newMessage)
            state.newMessageBody = ""
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageBody = action.body
            return state
        default:
            return state

    }
}

export const addMessageAC = () => {
    return {type: "ADD-MESSAGE"} as const
}

export const updateNewMessageTextAC = (body: string) => {
    return {type: "UPDATE-NEW-MESSAGE-TEXT", body: body} as const
}