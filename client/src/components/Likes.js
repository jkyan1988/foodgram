import { BsHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import React, { useState } from "react";


function Likes( { handleLikes }) {
    const [isOn, setIsOn] = useState(false);
    const [likePost, setLikePost] = useState(<BsHeartFill style={{ width: "23px", height: "23px"}} />);
    const [unlikePost, setUnlikePost] = useState(<BsHeart style={{ width: "23px", height: "23px"}}/>);

    function handleClick() {
        setIsOn((isOn) => !isOn);
      }

    return (
        <div>
            <button style={{ background: "white", border: "0px" }} onClick={handleLikes}>
                {isOn ? likePost : unlikePost }
            </button>
        </div>
    )
}

export default Likes;