import React from 'react';
import {InitialUsersType, UsersType} from "../../redux/users-reducer";
import s from "./users.module.css"

type UsersPropsType = {
    users: UsersType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UsersType[]) => void
}

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://img.freepik.com/premium-vector/avatar-icon-in-circle-male-sign-vector-illustration_276184-170.jpg?w=1060",
                followed: false,
                fullName: "Yauheni Niakhai",
                status: "I am developer",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://img.freepik.com/premium-vector/women-trendy-icon-avatar-character-cheerful-happy-people-flat-vector-illustration-round-frame-female-portraits-group-team-adorable-girl-isolated-on-white-background_275421-279.jpg",
                followed: true,
                fullName: "Sophia Niakhai",
                status: "I am author",
                location: {city: "Murmansk", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://img.freepik.com/free-vector/cute-girl-face-with-bun-hair_1308-134311.jpg?w=1380&t=st=1687895838~exp=1687896438~hmac=cd16ee04acbbc81525db88e06a07910d6a88ba0298fa39e8ff0970f465e823c8",
                followed: false,
                fullName: "Eva Niakhai",
                status: "I am developer",
                location: {city: "Minsk", country: "Belarus"}
            },
        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.selfi}><img src={u.photoUrl} alt=""/></div>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};
