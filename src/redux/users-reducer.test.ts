import {
    followSuccess,
    InitialStateType,
    setCurrentPage, setTotalUsersCount,
    setUsers,
    unfollowSuccess,
    usersReducer
} from "./users-reducer";

test("follow", () => {

    const initialState: InitialStateType = {
        users: [
            {
                "name": "Niakhai",
                "id": 1,
                "uniqueUrlName": null,
                "photos": {
                    "small": "photos.by",
                    "large": "photos.by"
                },
                "status": true,
                "followed": false
            }
        ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    };

    const action = followSuccess(1)
    const endState = usersReducer(initialState, action)

    expect(endState.users[0].id).toBe(1)
    expect(endState.users[0].followed).toBe(true)
})

test("unfollow", () => {

    const initialState: InitialStateType = {
        users: [
            {
                "name": "Niakhai",
                "id": 3,
                "uniqueUrlName": null,
                "photos": {
                    "small": "photos.by",
                    "large": "photos.by"
                },
                "status": true,
                "followed": true
            }
        ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    };

    const action = unfollowSuccess(3)
    const endState = usersReducer(initialState, action)

    expect(endState.users[0].id).toBe(3)
    expect(endState.users[0].followed).toBe(false)
})

test("add users", () => {

    const user = [{
        "name": "Niakhai",
        "id": 3,
        "uniqueUrlName": null,
        "photos": {
            "small": "photos.by",
            "large": "photos.by"
        },
        "status": true,
        "followed": true
    }]

    const initialState: InitialStateType = {
        users: [],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    };

    const action = setUsers(user)
    const endState = usersReducer(initialState, action)

    expect(endState.users[0].id).toBe(3)
    expect(endState.users[0].followed).toBe(true)
    expect(endState.users[0].name).toBe("Niakhai")
}
)

test("change currentPage", () => {

        const user = [{
            "name": "Niakhai",
            "id": 3,
            "uniqueUrlName": null,
            "photos": {
                "small": "photos.by",
                "large": "photos.by"
            },
            "status": true,
            "followed": true
        }]

        const initialState: InitialStateType = {
            users: [],
            pageSize: 5,
            totalUsersCount: 0,
            currentPage: 2,
            isFetching: true,
            followingInProgress: []
        };

        const action = setCurrentPage(2)
        const endState = usersReducer(initialState, action)

        expect(endState.currentPage).toBe(2)
    }
)

test("change TotalUsersCount", () => {

        const user = [{
            "name": "Niakhai",
            "id": 3,
            "uniqueUrlName": null,
            "photos": {
                "small": "photos.by",
                "large": "photos.by"
            },
            "status": true,
            "followed": true
        }]

        const initialState: InitialStateType = {
            users: [],
            pageSize: 5,
            totalUsersCount: 0,
            currentPage: 2,
            isFetching: true,
            followingInProgress: []
        };

        const action = setTotalUsersCount(2)
        const endState = usersReducer(initialState, action)

        expect(endState.currentPage).toBe(2)
    }
)