import {ActionType} from "./store";

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type InitialStateType = {
    users: UserType[]
}

const initialState: InitialStateType = {
    users: []
};

export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW" :
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}

        case "UNFOLLOW" :
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}

        case "SET-USERS" :
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }

}

export const followAC = (id: number) => {
    return {type: "FOLLOW", id} as const
}

export const unfollowAC = (id: number) => {
    return {type: "UNFOLLOW", id} as const
}

export const setUsersAC = (users: UserType[]) => {
    return {type: "SET-USERS", users} as const
}