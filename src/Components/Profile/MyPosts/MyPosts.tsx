import React, {RefObject} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionType, PostsType, ProfilePageType,} from "../../../redux/store";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} sum={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        props.updateNewPostText!(newPostElement.current!?.value)
    }

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={s.postsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}
