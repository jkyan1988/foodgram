import { TbPencil } from 'react-icons/tb';
import { RiDeleteBinLine } from 'react-icons/ri';
import React, { useState } from 'react';
import EditComment from './EditComment';

function Comment( { comment, setComment, onUpdateComment, onDeleteComment } ){

    const [isEditing, setIsEditing] = useState(false)
    const [ editComment, setEditComment ] = useState("")

    // EDIT COMMENT
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
          .then((updatedComment) => onUpdateComment(updatedComment));
          setIsEditing(false)
          e.target.reset()
        }

        // DELETE COMMENT
        function handleDelete(id){
          fetch(`/comments/${id}`,{
              method: "DELETE",
          })
          onDeleteComment(id)
          }
          
    return(
        <div>
          
           <ul>
           <li>{comment.comment}    
           <TbPencil onClick={() => setIsEditing(true)}/>  
           <RiDeleteBinLine onClick={() => handleDelete(comment.id)}/></li> 
            </ul>
            <div style={isEditing === false ? {display: "none"} : {display: ""}}>
                <EditComment handleSubmit={handleSubmit} setEditComment={setEditComment}/> 
            </div> 
        </div>
    )
}

export default Comment;