import {ActionType} from "./store";

export type UsersType = {
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

export type InitialUsersType = {
    users: UsersType[]
}

const initialState: InitialUsersType = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: "https://img.freepik.com/premium-vector/avatar-icon-in-circle-male-sign-vector-illustration_276184-170.jpg?w=1060",
        //     followed: false,
        //     fullName: "Yauheni Niakhai",
        //     status: "I am developer",
        //     location: {city: "Minsk", country: "Belarus"}
        // },
        // {
        //     id: 2,
        //     photoUrl: "https://img.freepik.com/premium-vector/women-trendy-icon-avatar-character-cheerful-happy-people-flat-vector-illustration-round-frame-female-portraits-group-team-adorable-girl-isolated-on-white-background_275421-279.jpg",
        //     followed: true,
        //     fullName: "Sophia Niakhai",
        //     status: "I am author",
        //     location: {city: "Murmansk", country: "Russia"}
        // },
        // {
        //     id: 3,
        //     photoUrl: "https://img.freepik.com/free-vector/cute-girl-face-with-bun-hair_1308-134311.jpg?w=1380&t=st=1687895838~exp=1687896438~hmac=cd16ee04acbbc81525db88e06a07910d6a88ba0298fa39e8ff0970f465e823c8",
        //     followed: false,
        //     fullName: "Eva Niakhai",
        //     status: "I am developer",
        //     location: {city: "Minsk", country: "Belarus"}
        // },
    ]
};

export const usersReducer = (state: InitialUsersType = initialState, action: ActionType): InitialUsersType => {
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

export const setUsersAC = (users: UsersType[]) => {
    return {type: "SET-USERS", users} as const
}