import React from "react";
import MyPosts from "./Profile/MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={"content"}>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my post
                <div>
                    NEW post
                </div>
                <div>
                    <MyPosts/>
                </div>
            </div>

        </div>
    )
}

export default Profile