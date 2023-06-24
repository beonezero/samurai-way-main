import React from "react";
import {ActionType, ProfilePageType, StoreType,} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    const state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}
    />)
}
