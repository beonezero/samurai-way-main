import {ActionType} from "./store";
import {usersAPI} from "../API/api";
import {Dispatch} from "redux";

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
    isFetching: boolean
    followingInProgress: number[]
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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

        case "TOGGLE_IS_FETCHING" :
            return {...state, isFetching: action.isFetching}

        case "TOGGLE_IS_FOLLOWING_PROGRESS" :
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state
    }

}

export const followSuccess = (id: number) => {
    return {type: "FOLLOW", id} as const
}

export const unfollowSuccess = (id: number) => {
    return {type: "UNFOLLOW", id} as const
}

export const setUsers = (users: UserType[]) => {
    return {type: "SET-USERS", users} as const
}

export const setCurrentPage = (currentPage: number) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {type: "SET-TOTAL-USERS-COUNT", totalCount} as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {type: "TOGGLE_IS_FETCHING", isFetching} as const
}

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: "TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId} as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
   return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const follow = (userId: number) => {
   return (dispatch: Dispatch) => {
       dispatch(toggleIsFollowingProgress(true, userId))
       usersAPI.follow(userId)
           .then(response => {
               if (response.data.resultCode == 0) {
                   dispatch(followSuccess(userId))
               }
               dispatch(toggleIsFollowingProgress(false, userId))
           })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}