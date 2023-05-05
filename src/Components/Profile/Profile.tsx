import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="" className={s.content__img}/>
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