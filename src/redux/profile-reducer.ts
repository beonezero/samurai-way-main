import {ActionType} from "./store";
import {ProfileType} from "../Components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {usersAPI} from "../API/api";

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
    ] as PostsType[],
    newPostText: "",
    profile: null
}

export type InitialStateProfileType = typeof initialState

export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType): InitialStateProfileType => {
    switch (action.type) {
        case "ADD-POST":
            return {...state, newPostText: "", posts: [...state.posts, {id: 7, message: state.newPostText, likesCount: 0}]}

        case "UPDATE-NEW-POST-TEXT" :
            return {...state, newPostText: action.newText}

        case "SET-USER-PROFILE" :
            return {...state, profile: action.profile}

        default:
            return state
    }

}

export const addPostAC = () => {
    return {type: "ADD-POST"} as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newText: newText} as const
}

export const setUserProfile = (profile: any) => {
    return {type: "SET-USER-PROFILE", profile} as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}