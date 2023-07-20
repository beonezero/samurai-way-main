import React, {RefObject} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export const MyPosts = (props: MyPostsType) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} sum={p.likesCount}/>)

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>my post</h3>
            <div>
                <MessageReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

const maxLength10 = maxLengthCreator(10)
const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPostText"} placeholder={"type your post"} validate={[required, maxLength10]}/>
            <button onClick={props.onAddPost}>Add post</button>
        </form>
    )
};

const MessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddPostForm)
