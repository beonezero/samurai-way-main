import React from 'react';
import s from "./users.module.css"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import usersPhoto from "../../assets/images/user.svg"


export const Users = (props: UsersPropsType) => {
    const getUsers = () => {
        if (props.usersPage.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                props.setUsers(response.data.items)
            })
    }

    }
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.selfi}><img src={u.photos.small != null ? u.photos.small : usersPhoto} alt=""/></div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}
                                          className={s.button_unfollow}>Unfollow</button>
                                :
                                <button onClick={() => props.follow(u.id)} className={s.button_follow}>Follow</button>}
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
