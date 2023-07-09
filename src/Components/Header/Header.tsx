import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";

const Header = (props: HeaderContainerPropsType) => {
    return (
        <header className={s.header}>
            <img src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_vk_vkontakte_icon_143187.png" alt=""/>
            <div className={s.loginBlock}>
                {
                    props.isAuth ? props.login :
                        <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header