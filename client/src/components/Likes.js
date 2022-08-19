import { BsHeartFill } from "react-icons/bs";
import { FaHeartBroken } from 'react-icons/fa'


function Likes( { like }) {
    
    return (
        <span>
          {like.like.includes("true") ? <BsHeartFill /> :  null}
          {like.like.includes("false") ? <FaHeartBroken /> : null }
        </span>
        )}

export default Likes;
      