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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    totalCount: string
    error: any
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
            return {...state, users: action.users}

        case "SET-CURRENT-PAGE" :
            return {...state, currentPage: action.currentPage}

        case "SET-TOTAL-USERS-COUNT" :
            return {...state, totalUsersCount: action.totalCount}

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

export const setCurrentPageAC = (currentPage: number) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {type: "SET-TOTAL-USERS-COUNT", totalCount} as const
}