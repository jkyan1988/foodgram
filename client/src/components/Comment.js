import { TbPencil } from 'react-icons/tb';
import { RiDeleteBinLine } from 'react-icons/ri';
import React, { useState } from 'react';
import EditComment from './EditComment';
import '../styles/comment.scss';

function Comment( { comment, 
                    setComment, 
                    onUpdateComment, 
                    onDeleteComment, 
                    findUser,
                    currentUser
                   } ){

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
          console.log(currentUser.username)

          const commentUser = findUser.filter((user) => user.id === comment.user_id).map((user) => user.username)
          const commentUserPic = findUser.filter((user) => user.id === comment.user_id).map((user) => user.profile_pic)
          // const canEditComment = (commentUser === user.username) ? true : false
// if (commentUser === user.username) return <TbPencil> 

          
    return(
        <div>
          
           
           <span> 
            <br></br>
            <img className="commentericon" src={commentUserPic} />
            <h4>{commentUser}</h4>  
            {comment.comment} 
           
            {(commentUser === currentUser.username) ?
           
           (<span>  
           <TbPencil onClick={() => setIsEditing(true)}/>  
           <RiDeleteBinLine onClick={() => handleDelete(comment.id)}/>
           </span> )

           :

           (<span></span>)        
           }


           </span>
         
           
           <br></br>
           
            <div style={isEditing === false ? {display: "none"} : {display: ""}}>
                <EditComment handleSubmit={handleSubmit} setEditComment={setEditComment}/> 
            </div> 
        </div>
    )
}

export default Comment;