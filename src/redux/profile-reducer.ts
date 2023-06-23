import {ActionType, PostsType, ProfilePageType} from "./store";

export const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
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