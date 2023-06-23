import React, {RefObject} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionType, addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../redux/state";

type MyPostsPropsType = {
    newPropsText: string
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements =
        props.profilePage.posts.map(p => <Post message={p.message} sum={p.likesCount}/>)

    const addPost = () => {
            props.dispatch(addPostAC())
    }

    const onPostChange = () => {
        props.dispatch(updateNewPostTextAC(newPostElement.current!?.value))
    }

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={s.postsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPropsText}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}
