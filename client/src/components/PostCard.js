import '../styles/postcard.scss';
import Comment from './Comment';
import PostMenu from './PostMenu'
import { TbPencil } from 'react-icons/tb';
import React, { useState } from "react";
import { RiDeleteBinLine } from 'react-icons/ri';

function PostCard( { post, comments, user, setPost, posts } ){
    const [currentPost, setCurrentPost] = useState(post) 
    const [editPost, setEditPost] = useState(currentPost.post)
    const [editDescription, setEditDescription] = useState(currentPost.description)
    const [isEditing, setIsEditing] = useState(false)
   
    function handleDelete(id){
        fetch(`/posts/${id}`,{
            method: "DELETE",
        })
        const postToDisplay = posts.filter(post => post.id !== id)
        setPost(postToDisplay)
      }

      function handleSubmit(e) {
        e.preventDefault()
        fetch(`posts/${currentPost.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post: editPost,
              description: editDescription,
            }),
        }).then((r) => r.json())
          .then((updatedPost) => setCurrentPost(updatedPost));
          setIsEditing(false)
          e.target.reset()

          
          
        //   .then(() => {
        //     fetch(`/posts/${currentPost.id}`)
        //       .then((response) => response.json())
        //       .then(setPost);
        //   });

        }


    return(
    <div className="cards">
        <div className="card">
            <header>{user.id}
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
            <img src={post.post} alt="" className="cardImage"/>
            <PostMenu />
            <div>{post.description}</div>
            
            <div>
                {/* {comments.filter((comment) => { 
                    if (comment.post_id === post.id) {
                return (
                <Comment
                    key={comment.id} 
                    comment={comment} 
                /> 
                
                )}})
                } */}
            </div>
           
        </div>
    </div>
    )
}

export default PostCard;