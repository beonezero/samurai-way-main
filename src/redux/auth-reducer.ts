import {ActionType} from "./store";

export type InitialStateAuthType = {
    userId: any
    email: any
    login: any
    isAuth: boolean
}

const initialState: InitialStateAuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state: InitialStateAuthType = initialState, action: ActionType): InitialStateAuthType => {
    switch (action.type) {
        case "SET_USER_DATA" :
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }

}

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {type: "SET_USER_DATA", data: {userId, email, login}} as const
}
