import {ActionType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../API/api";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}


const initialState = {
    posts: [
        {id: 1, message: "Hi! How are you?", likesCount: 32},
        {id: 2, message: "It's my first post ", likesCount: 13},
        {id: 3, message: "Do you fine?", likesCount: 45},
        {id: 4, message: "Do you?", likesCount: 51},
        {id: 5, message: "Are you ready?", likesCount: 27},
        {id: 6, message: "What do you think?", likesCount: 106},
        {id: 7, message: "Good morning!!", likesCount: 80}
    ],
    newPostText: "",
    profile: null,
    status: ""
}

export type InitialStateProfileType = {
    posts: PostsType[]
    newPostText: string
    profile: any
    status: string
}

export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType): InitialStateProfileType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, {id: 7, message: action.newPostText, likesCount: 0}]
            }

        case "SET-USER-PROFILE" :
            return {...state, profile: action.profile}

        case "SET-STATUS-PROFILE" :
            return {...state, status: action.status}

        default:
            return state
    }

}

export const addPostAC = (newPostText: string) => {
    return {type: "ADD-POST", newPostText} as const
}


export const setUserProfile = (profile: any) => {
    return {type: "SET-USER-PROFILE", profile} as const
}

export const setStatusProfile = (status: string) => {
    return {type: "SET-STATUS-PROFILE", status} as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getStatusProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusProfile(response.data))
        })
}

export const updateStatusProfile = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusProfile(status))
            }
        })
}