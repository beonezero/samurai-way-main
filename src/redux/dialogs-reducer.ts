import {ActionType} from "./store";

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}


const initialState = {
    dialogs: [
        {id: 1, name: "Yauheni"},
        {id: 2, name: "Sophia"},
        {id: 3, name: "Eva"},
        {id: 4, name: "Ivan"},
        {id: 5, name: "Alex"},
        {id: 6, name: "Artemiy"}
    ] as DialogsType[],

    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How do you do?"},
        {id: 3, message: "Where are you from"},
        {id: 4, message: "9 May - this day win"},
        {id: 5, message: "Freeday!!!!!!"},
        {id: 6, message: "Work and travel ?"}
    ] as MessagesType[]
}

export type InitialStateDialogPageType = typeof initialState



export const dialogsReducer = (state: InitialStateDialogPageType = initialState, action: ActionType): InitialStateDialogPageType => {
    switch (action.type) {
        case "ADD-MESSAGE" :
            return {
                ...state,
                messages: [...state.messages,
                    {id: 7, message: action.newMessageBody}]
            }
        default:
            return state
    }
}

export const addMessageAC = (newMessageBody: string) => {
    return {type: "ADD-MESSAGE", newMessageBody} as const
}
