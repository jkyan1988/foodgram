import { BsHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import React, { useState } from "react";
import { ClapButton } from '@lyket/react';


function Likes( { handleUnlikes, likes, handleLikes, isOn, setIsOn, handleDeleteLikes, like, user }) {
    // const [isOn, setIsOn] = useState(false);
    // const [likePost, setLikePost] = useState(<BsHeartFill  onClick={handleDeleteLikes} style={{ width: "23px", height: "23px"}} />);
    // const [unlikePost, setUnlikePost] = useState(<BsHeart onClick={handleLikes} style={{ width: "23px", height: "23px"}}/>);
    // const [ isLiked, setIsLiked ] = useState("")
    // function handleClick() {
    //     setIsOn(isOn => !(isOn));
    //   }
    // function handleClick(e){
    //     if (isOn && likePost){
    //         handleLikes(e)
    //     }
    //     else {
    //         handleDeleteLikes(e)
    //     }
    // }
    // function handleLikeChange(like){
    //    if (like.like.includes("true")) {
    //     return <BsHeartFill />
    //    } else (
    //     null
    //     )   
    //    }
        // {like.like.includes("true") ? <BsHeartFill /> : null}
    
    
    return (
        <div>
            {/* <ClapButton /> */}
            Likes:  likes this  {like.like.includes("true") ? <BsHeartFill /> : <BsHeart />}
        </div>
    )
}

export default Likes;