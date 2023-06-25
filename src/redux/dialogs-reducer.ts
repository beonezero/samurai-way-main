import {ActionType, DialogsPageType, MessagesType} from "./store";

const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: "Yauheni"},
        {id: 2, name: "Sophia"},
        {id: 3, name: "Eva"},
        {id: 4, name: "Ivan"},
        {id: 5, name: "Alex"},
        {id: 6, name: "Artemiy"}
    ],

    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How do you do?"},
        {id: 3, message: "Where are you from"},
        {id: 4, message: "9 May - this day win"},
        {id: 5, message: "Freeday!!!!!!"},
        {id: 6, message: "Work and travel ?"}
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE" :
            const newMessage: MessagesType = {id: 7, message: state.newMessageBody}
            const copyState = {...state, messages: [...state.messages]}
            copyState.messages.push(newMessage)
            copyState.newMessageBody = ""
            return copyState
        case "UPDATE-NEW-MESSAGE-TEXT":
            const newCopyState = {...state}
            newCopyState.newMessageBody = action.body
            return newCopyState
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