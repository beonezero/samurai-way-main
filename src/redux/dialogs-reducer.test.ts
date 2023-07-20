import {
    addMessageAC,
    dialogsReducer,
    DialogsType,
    InitialStateDialogPageType,
    MessagesType
} from "./dialogs-reducer";


test("add message", () => {

    const initialState : InitialStateDialogPageType = {
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

    const action = addMessageAC("Hello, how are you?")
    const endState = dialogsReducer(initialState, action)
    
    expect(endState.messages[6].id).toBe(7)
    expect(endState.messages[6].message).toBe("Hello, how are you?")
})
