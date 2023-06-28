import {ActionType} from "./store";

export type UserType = {
    "name": string
    "id": number,
    "uniqueUrlName": null
    "photos": {
        "small": string
        "large": string
    }
    "status": any
    "followed": boolean
}

export type InitialStateType = {
    users: UserType[]
    totalCount: string
    error: any
}

const initialState: InitialStateType = {
    users: [],
    totalCount: "",
    error: null
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