let rerenderEntireThree = (state: RootStateType) => {
    console.log("state changed" + state)
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}


export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>

}
export type SideBarType = {}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}

export let state: RootStateType = {
    profilePage: {
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
    },

    dialogsPage: {
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
        ]
    },
    sideBar: {}
}

export const addMessage = (postMessage: string) => {
    const newMessage: MessagesType = {id: 7, message: postMessage}
    state.dialogsPage.messages.push(newMessage)
    rerenderEntireThree(state)
}

export const addPost = () => {
    const newPost: PostsType = {id: 7, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireThree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireThree(state)
}

export const subscribe = (observer: any) => {
    rerenderEntireThree = observer
}