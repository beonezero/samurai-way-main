import {ActionType} from "./store";
import {authAPI} from "../API/api";
import {Dispatch} from "redux";

export type InitialStateAuthType = {
    userId: number | null
    email: string | null
    login: string | null
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
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}

