import {addMessageAC, dialogsReducer, updateNewMessageTextAC} from "./dialogs-reducer";
import {addPostAC, profileReducer, setUserProfile, updateNewPostTextAC} from "./profile-reducer";
import {sideBarReducer} from "./sideBar-reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "./users-reducer";

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}


type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: any
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type SideBarType = {}


type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}

type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}

export type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageTextAC> | ReturnType<typeof follow>
    | ReturnType<typeof unfollow> | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching> | ReturnType<typeof setUserProfile>



export const store: StoreType = {
    _state: {
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
            newPostText: "",
            profile: {}
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
            ],
            newMessageBody: ""
        },
        sideBar: {}
    },
    _callSubscriber(state: RootStateType) {
        console.log("state changed" + state)
    },


    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state)
    }
}


