import '../styles/postcard.scss';
import Comment from './Comment';
import { TbPencil } from 'react-icons/tb';
import React, { useState } from "react";
import { RiDeleteBinLine } from 'react-icons/ri';
import Likes from './Likes';
import EditPost from './EditPost';
import UserProfileInfo from './UserProfileInfo';
import { FcLike } from "react-icons/fc";
import { FcDislike } from 'react-icons/fc'

function PostCard( { selectedPost, 
                    comments, 
                    setComment,
                    likes,
                    setLikes,
                    findUser,
                    onUpdatePost,
                    onDeletePost,
                    onUpdateComment,
                    onDeleteComment,
                    onUpdateLike,
                    user,
                    filteredUsers
                } ){
    const [ currentPost, setCurrentPost ] = useState(selectedPost) 
    const [ editPost, setEditPost ] = useState(currentPost.post)
    const [ editDescription, setEditDescription ] = useState(currentPost.description)
    const [ isEditing, setIsEditing ] = useState(false)
    const [ isEditingComment, setIsEditingComment ] = useState(false)
    const [ newComment, setNewComment ] = useState("")
    const [ showComments, setShowComments ] = useState(false)

    
// Submit Comment
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
    
// Delete POSTS
    function handleDelete(id){
        fetch(`/posts/${id}`,{
            method: "DELETE"
        })
       onDeletePost(id)
        }

     
// EDIT POSTS
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
          .then((updatedPost) => onUpdatePost(updatedPost));
          setIsEditing(false)
          e.target.reset()
        
        }
// ADD TRUE TO LIKE VALUE
        function handleLikes(e){
          e.preventDefault();
              fetch("/likes", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                  body: JSON.stringify({
                  like: "true",
                  
                  user_id: selectedPost.user_id,
                  post_id: selectedPost.id,
                }),
              })
                  .then((response) => response.json())
                  .then((newLike) => setLikes([newLike, ...likes]))
                 
              };
// ADD FALSE TO LIKE VALUE
          function handleUnlikes(e){
                e.preventDefault();
                    fetch("/likes", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                        body: JSON.stringify({
                        like: "false",
                        
                        user_id: selectedPost.user_id,
                        post_id: selectedPost.id,
                      }),
                    })
                        .then((response) => response.json())
                        .then((newLike) => setLikes([newLike, ...likes]))
           };
       
          const filterCurrentPostUserId = findUser.filter((user) => user.id === selectedPost.user_id).map((user) => user.id)


          let displayEdit 
          filterCurrentPostUserId == user.id ?
            displayEdit = <TbPencil className="cardButton" onClick={() => setIsEditing(true)}/>  
            :
            displayEdit = null
        
          let displayDelete 
          filterCurrentPostUserId == user.id ?
          displayDelete = <RiDeleteBinLine onClick={() => handleDelete(currentPost.id)}/>  
            :
            displayDelete = null

  return(
    <div className="cards">
        <div className="card">
            <header className="poster">
      {findUser.filter((user) => user.id === selectedPost.user_id).map((user) => {
        return ( <UserProfileInfo key={user.id} user={user} /> )})}

            {displayDelete}
            {displayEdit}

            </header>
            <EditPost 
                      isEditing={isEditing}
                      handleSubmit={handleSubmit}
                      setEditPost={setEditPost}
                      setEditDescription={setEditDescription}
                      setIsEditing={setIsEditing}
            />
            <img src={selectedPost.post} alt="" className="cardImage"/>
          <div className="likes-section">

           Like?:  <FcLike className="like-btn" onClick={handleLikes}/> 
           
           Dislike?: <FcDislike className="dislike-btn" onClick={handleUnlikes}/> 

           <br></br>
           <br></br>
            Likes:
            {likes && likes.filter((like) => like.post_id === selectedPost.id).map((like) => {
              return ( <Likes 
                key={like.id} 
                            like={like} 
                      />
            )})}
            </div>
            <div className="description">{selectedPost.description}</div>
            <div className="comments">
                <br></br>
                {(showComments === false)
                ?
                <button className="viewcomments" onClick={() => setShowComments(true)}>View all comments</button> 
                :
                <button className="collapse-btn" onClick={() => setShowComments(false)}>Collapse comments</button>
                }
                <div style={showComments === false ? {display: "none"} : {display: ""}}>
            {comments.filter((comment) => comment.post_id === selectedPost.id).map((comment) => {
                    return (<Comment 
                                    key={comment.id} 
                                    comment={comment} 
                                    setComment={setComment} 
                                    onUpdateComment={onUpdateComment} 
                                    onDeleteComment={onDeleteComment} 
                                    findUser={findUser}
                                    currentUser = {user}
                                    setShowComments={setShowComments}
                                    filteredUsers={filteredUsers}
                            />)
                   })} 
                   </div>
                  <div className="commenter-icon-container"><img alt='' src={user.profile_pic}  className="user-icon-comment"/></div> 
                <form className="form-of-comment" onSubmit={handleCommentSubmit}>
                    <input className="comment-form" onChange={(e) => setNewComment(e.target.value)} type="text"/>
                    <button className="post-btn" onClick={(e) => {e.stopPropagation()}}>Post</button>
                </form>   
            </div> 
        </div>
    </div>
    )
}

export default PostCard;