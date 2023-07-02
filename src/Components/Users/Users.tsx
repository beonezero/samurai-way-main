import React from 'react';
import s from "./users.module.css"
import axios from "axios";
import usersPhoto from "../../assets/images/user.svg"
import {UsersPropsType} from "./UsersContainer";


export class Users extends React.Component <UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        const pages: Array<number> = []
        for (let i: number = 1; i <= pageCount; i++){
            pages.push(i)
        }
    return (
        <div>
            <div>
                {pages.map((p,i) => <span className={this.props.currentPage == p ? s.pagination_activ : ""} key={i}>{p}</span>
               )}
            </div>
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
}
