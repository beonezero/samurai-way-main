import React from "react";
import {ActionType, ProfilePageType, StoreType,} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

// type MyPostsContainerPropsType = {
//     store: StoreType
// }

export const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                const state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostAC())
                }
                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }
                return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                             posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
            }
        }
            </StoreContext.Consumer>

}
