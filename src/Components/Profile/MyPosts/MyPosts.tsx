import React, {RefObject} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionType, ProfilePageType} from "../../../redux/state";

type MyPostsPropsType = {
    newPropsText: string
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements =
        props.profilePage.posts.map(p => <Post message={p.message} sum={p.likesCount}/>)

    const addPost = () => {
            props.dispatch({type: "ADD-POST"})
    }

    const onPostChange = () => {
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: newPostElement.current!?.value})
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
