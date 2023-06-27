import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
        }
    }


const mapDispatchToProps = (dispatch: Function) => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
