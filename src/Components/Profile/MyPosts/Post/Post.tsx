import React from "react";
import s from "./Post.module.css";

type PostType = {
    message: string,
    sum: number
}
const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX48JYpPPow8zQXp34oKHyqRbECSs1dUpOdw&usqp=CAU"
                alt="" className={s.image}/>
            {props.message}
            <div>
                <span>{props.sum} </span>
                <button>Like</button>
            </div>
        </div>
    )
}

export default Post