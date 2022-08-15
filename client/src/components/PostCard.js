import '../styles/postcard.scss';
import Comment from './Comment';
import PostMenu from './PostMenu'
import { TbPencil } from 'react-icons/tb';
import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from 'react-icons/ri';

function PostCard( { selectedPost, 
                    comments, 
                    posts, 
                    setComment
                } ){
    const [ currentPost, setCurrentPost ] = useState(selectedPost) 
    const [ editPost, setEditPost ] = useState(currentPost.post)
    const [ editDescription, setEditDescription ] = useState(currentPost.description)
    const [ isEditing, setIsEditing ] = useState(false)
    const [ isEditingComment, setIsEditingComment ] = useState(false)
    const [ newComment, setNewComment ] = useState("")
    

    function handleCommentSubmit(e) {
        e.preventDefault();
        fetch("/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            post_id: selectedPost.id,
            comment: newComment,
          }),
        })
            .then((response) => response.json())
            .then((newComment) => setComment([newComment, ...comments]))
            setIsEditingComment(false)
            e.target.reset()
        };

    
      
    
    

    function handleDelete(id){
        fetch(`/posts/${id}`,{
            method: "DELETE",
        }).then(() => {
            fetch(`/posts/${id}`)
              .then((response) => response.json())
              .then(setCurrentPost);
          });
          window.location.reload(false);
        }

     

      function handleSubmit(e) {
        e.preventDefault()
        fetch(`/posts/${selectedPost.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: selectedPost.id,
                post: editPost,
              description: editDescription,
            }),
        }).then((r) => r.json())
          .then((updatedPost) => setCurrentPost([updatedPost, ...posts]));
          setIsEditing(false)
          e.target.reset()
          window.location.reload(false);
        }
       


    return(
    <div className="cards">
        <div className="card">
            <header>{selectedPost.user_id}
            <RiDeleteBinLine onClick={() => handleDelete(currentPost.id)}/>
            <TbPencil className="cardButton" onClick={() => setIsEditing(true)}/>
            </header>
            <div style={isEditing === false ? {display: "none"} : {display: ""}}>
                <h3>Edit Post</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Post URL" onChange={(e) => setEditPost(e.target.value)}/>
                    <input type="text" placeholder="Caption" onChange={(e) => setEditDescription(e.target.value)}/>
                    <button>Submit</button>
                    <button onClick={(e) => {
                      e.stopPropagation()
                      setIsEditing(false)}}>Cancel</button>
                </form>
            </div>
            <img src={selectedPost.post} alt="" className="cardImage"/>
            <PostMenu />
            <div>{selectedPost.description}</div>
            
            <div>
                <br></br>
            <b>Comments</b> <button onClick={() => setIsEditingComment(true)}>Add a comment</button>
            <div style={isEditingComment === false ? {display: "none"} : {display: ""}}>
                
                <form onSubmit={handleCommentSubmit}>
                    <input onChange={(e) => setNewComment(e.target.value)} type="text"/>
                    <button onClick={(e) => {e.stopPropagation()}}>Submit</button>
                </form>
                    <button onClick={(e) => {
                      e.stopPropagation()
                      setIsEditingComment(false)}}>Cancel</button>
            </div>
            {comments.filter((comment) => comment.post_id === selectedPost.id).map((comment) => {
                    return (<Comment key={comment.id} comment={comment} setComment={setComment} />)
                   })} 
            </div> 
        </div>
    </div>
    )
}

export default PostCard;