import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsType, ProfilePageType} from "../../../redux/state";


const MyPosts = (props: ProfilePageType) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} sum={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts