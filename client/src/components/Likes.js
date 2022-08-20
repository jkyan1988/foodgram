import { BsHeartFill } from "react-icons/bs";
import { FaHeartBroken } from 'react-icons/fa'
import { useState } from 'react';

function Likes( { like }) {

  // const [ trueLike, setTrueLike ] = useState(filteredTrueLikes)
  // const [ falseLike, setFalseLike ] = useState(filteredFalseLikes)
  
  // console.log(trueLike)
 const filteredTrueLikes = like.like.includes("true") ? <BsHeartFill/> :  null
   
    return (
        <span >
          {filteredTrueLikes}
          {like.like.includes("false") ? <FaHeartBroken/> : null }
        </span>
        )}

export default Likes;
      

// ideas for like button

// add a delete like button

// filter true and false like buttons using state to hold true and hold false
// like if like is true then set state to this, then if false set state to this
// const filteredTrueLikes = likes.filter((like) => like.like.includes("true"))
// const filteredFalseLikes = likes.filter((like) => like.like.includes("false"))
// create a function to set true likes and true false, then separate them in the return value