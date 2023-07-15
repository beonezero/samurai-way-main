import {dialogsReducer, updateNewMessageTextAC} from "./dialogs-reducer";
import {
    addPostAC,
    InitialStateProfileType,
    PostsType,
    profileReducer,
    setUserProfile,
    updateNewPostTextAC
} from "./profile-reducer";
import {ProfileType} from "../Components/Profile/ProfileContainer";


test("add post", () => {

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

    const action = addPostAC()
    const endState = profileReducer(initialState, action)

    expect(endState.posts.length).toBe(8)
    expect(endState.posts[7].likesCount).toBe(0)
})

test("update post text", () => {

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

    const action = updateNewPostTextAC("Hello! were are you from?")
    const endState = profileReducer(initialState, action)

    expect(endState.newPostText).toBe("Hello! were are you from?")
})

test("update post text", () => {
    type PostsType = {
        id: number
        message: string
        likesCount: number
    }

    type endStateType = {
        posts: PostsType[]
        newPostText: string
        profile: ProfileType
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
        profile: null
    }

    const user: ProfileType = {
        userId: 1,
        lookingForAJob: false,
        lookingForAJobDescription: "IT development",
        fullName: "Niakhai Yauheni",
        contacts: {
            github: "beonezero",
            vk: "microla6",
            facebook: "niakhai",
            instagram: "niakhai",
            twitter: "niakhai",
            website: "niakhai.com",
            youtube: "niakhai-chanel",
            mainLink: "Niakhai"
        },
        photos: {
            small: "https://photos/niakhaismall.com",
            large: "https://photos/niakhaibig.com"
        }
    }

    const action = setUserProfile(user)
    const endState: endStateType = profileReducer(initialState, action)

    expect(endState.profile.fullName).toBe("Niakhai Yauheni")
})

