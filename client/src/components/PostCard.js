import '../styles/postcard.scss';
import Comment from './Comment';
import PostMenu from './PostMenu'
import { ReactComponent as CardButton } from '../images/cardButton.svg';
import { TbPencil } from 'react-icons/tb';
import React, { useState } from "react";

function PostCard( { post, comments, user, setPost, posts } ){
    const [currentPost, setCurrentPost] = useState(post) 
    const [editDescription, setEditDescription] = useState(currentPost.description)
    const [isEditing, setIsEditing] = useState(false)
   
    function handleDelete(id){
        fetch(`http://localhost:9292/movies/${id}`,{
            method: "DELETE",
        })
        const postToDisplay = posts.filter(movie => movie.id !== id)
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
              description: editDescription,
            }),
          })
          .then((r) => r.json())
          .then((updatedMovie) => setCurrentMovie(updatedMovie));
          setIsEditing(false)
          e.target.reset()
        }
// const { id, comment } = comments
console.log(comments)
    return(
    <div className="cards">
        <div className="card">
            <header>{user.id}
            <TbPencil className="cardButton" />
            </header>
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