import React from 'react';
import s from "./users.module.css";
import usersPhoto from "../../assets/images/user.svg";
import {InitialStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    usersPage: InitialStateType
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingProgress: number[]
}

const Users = (props: UsersType) => {
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages: Array<number> = []
    for (let i: number = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((p, i) => <span onClick={() => props.onPageChanged(p)}
                                           className={s.pagination + " " + (props.currentPage == p ? s.pagination_active : "")}
                                           key={i}>{p}</span>
                )}
            </div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.selfi}>
                            <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto}/>
                                </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "e318d0fb-ce59-4c2b-827b-0e3b18b76493"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleIsFollowingProgress(false, u.id)
                                        })
                                }}
                                          className={s.button_unfollow}>Unfollow</button>
                                :
                                <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id} `, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "e318d0fb-ce59-4c2b-827b-0e3b18b76493"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleIsFollowingProgress(false, u.id)
                                        })
                                }}
                                        className={s.button_follow}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;