import { TbPencil } from 'react-icons/tb';
import { RiDeleteBinLine } from 'react-icons/ri';
import React, { useState } from 'react';
import EditComment from './EditComment';

function Comment( { comment, setComment } ){

    const [isEditing, setIsEditing] = useState(false)
    const [ editComment, setEditComment ] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/comments/${comment.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              comment: editComment,
              id: comment.id,
            }),
          })
          .then((r) => r.json())
          .then((updatedComment) => setComment(updatedComment));
          setIsEditing(false)
          e.target.reset()
          window.location.reload(false);
        }

    return(
        <div>
          
           <ul>
           <li>{comment.comment}    
           <TbPencil onClick={() => setIsEditing(true)}/>  
           <RiDeleteBinLine /></li> 
            </ul>
            <div style={isEditing === false ? {display: "none"} : {display: ""}}>
                <EditComment handleSubmit={handleSubmit} setEditComment={setEditComment}/> 
            </div> 
        </div>
    )
}

export default Comment;