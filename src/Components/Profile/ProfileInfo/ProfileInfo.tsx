import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import {mapStateToPropsType} from "../ProfileContainer";
const ProfileInfo = (props: mapStateToPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="" className={s.content__img}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
                <div>{props.profile.contacts.github}</div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo