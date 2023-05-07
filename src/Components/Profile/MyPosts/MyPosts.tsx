import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message={"Hi! How are you?"} sum={24}/>
                <Post message={"It's my first post "} sum={11}/>
                <Post message={"Do you fine?"} sum={21}/>
            </div>
        </div>

    )
}

export default MyPosts