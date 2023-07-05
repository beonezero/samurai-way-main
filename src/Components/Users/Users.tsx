import React from 'react';
import s from "./users.module.css";
import usersPhoto from "../../assets/images/user.svg";
import {InitialStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    usersPage: InitialStateType
}

const Users = (props: UsersType) => {
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages: Array<number> = []
    for (let i: number = 1; i <= pageCount; i++){
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
                                ? <button onClick={() => props.unfollow(u.id)}
                                          className={s.button_unfollow}>Unfollow</button>
                                :
                                <button onClick={() => props.follow(u.id)}
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