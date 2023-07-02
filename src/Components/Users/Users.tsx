import React from 'react';
import s from "./users.module.css"
import axios from "axios";
import usersPhoto from "../../assets/images/user.svg"
import {UsersPropsType} from "./UsersContainer";


export class Users extends React.Component <UsersPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }

    render() {
    return (
        <div>
            {
                this.props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.selfi}><img src={u.photos.small != null ? u.photos.small : usersPhoto} alt=""/></div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}
                                          className={s.button_unfollow}>Unfollow</button>
                                :
                                <button onClick={() => this.props.follow(u.id)} className={s.button_follow}>Follow</button>}
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
    }
};
