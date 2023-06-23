import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, PostsType, ProfilePageType} from "../../redux/store";
import {MyPosts} from "./MyPosts/MyPosts";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     newPropsText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile