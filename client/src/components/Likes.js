import { BsHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import React, { useState } from "react";
import { ClapButton } from '@lyket/react';


function Likes( {  likes, handleLikes, isOn, setIsOn, handleDeleteLikes }) {
    // const [isOn, setIsOn] = useState(false);
    const [likePost, setLikePost] = useState(<BsHeartFill style={{ width: "23px", height: "23px"}} />);
    const [unlikePost, setUnlikePost] = useState(<BsHeart style={{ width: "23px", height: "23px"}}/>);

    // function handleClick() {
    //     setIsOn((isOn) => !isOn);
    //   }
    function handleClick(e){
        if (isOn && likePost){
            handleLikes(e)
        }
        else {
            handleDeleteLikes(e)
        }
    }
    
    return (
        <div>
            
            <button style={{ background: "white", border: "0px" }} onClick={handleClick} >
                {isOn ? likePost : unlikePost }
            </button>
        </div>
    )
}

export default Likes;