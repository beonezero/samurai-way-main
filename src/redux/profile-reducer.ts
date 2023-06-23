import {ActionType, PostsType, ProfilePageType} from "./store";

const initialState : ProfilePageType = {
    posts: [
        {id: 1, message: "Hi! How are you?", likesCount: 32},
        {id: 2, message: "It's my first post ", likesCount: 13},
        {id: 3, message: "Do you fine?", likesCount: 45},
        {id: 4, message: "Do you?", likesCount: 51},
        {id: 5, message: "Are you ready?", likesCount: 27},
        {id: 6, message: "Do you sleep?", likesCount: 106},
        {id: 7, message: "Good morning!!", likesCount: 80}
    ],
    newPostText: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {id: 7, message: state.newPostText, likesCount: 0}
            state.posts.unshift(newPost)
            state.newPostText = ""
            return state
        case "UPDATE-NEW-POST-TEXT" :
            state.newPostText = action.newText
            return state
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