import '../styles/postcard.scss';
import Comment from './Comment';
import PostMenu from './PostMenu'
import { TbPencil } from 'react-icons/tb';
import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from 'react-icons/ri';
import Likes from './Likes';
import EditPost from './EditPost';
import { ClapButton } from '@lyket/react';

function PostCard( { selectedPost, 
                    comments, 
                    posts, 
                    setComment,
                    setPost,
                    handleLikes,
                    user,
                    likes,
                    setLikes,
                    isOn,
                    setIsOn,
                    handleDeleteLikes,
                    findUserName

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
          .then((updatedPost) => setCurrentPost(updatedPost));
          setIsEditing(false)
          e.target.reset()
          window.location.reload(false);
        }

       
       


    return(
    <div className="cards">
        <div className="card">
            <header>{findUserName}
            <RiDeleteBinLine onClick={() => handleDelete(currentPost.id)}/>
            <TbPencil className="cardButton" onClick={() => setIsEditing(true)}/>
            </header>
            <EditPost 
                      isEditing={isEditing}
                      handleSubmit={handleSubmit}
                      setEditPost={setEditPost}
                      setEditDescription={setEditDescription}
                      setIsEditing={setIsEditing}
            
            />
            <img src={selectedPost.post} alt="" className="cardImage"/>
            <Likes 
                  likes={likes} 
                  isOn={isOn} 
                  setIsOn={setIsOn} 
                  handleLikes={handleLikes}
                  handleDeleteLikes={handleDeleteLikes}
            />
           <ClapButton id="diy-fish-holder" namespace="post" />
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