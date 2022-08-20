import '../styles/postcard.scss';
import Comment from './Comment';
import { TbPencil } from 'react-icons/tb';
import React, { useState } from "react";
import { RiDeleteBinLine } from 'react-icons/ri';
import Likes from './Likes';
import EditPost from './EditPost';
import { BsHeartFill } from "react-icons/bs";
import { FaHeartBroken } from 'react-icons/fa'
import UserProfileInfo from './UserProfileInfo';

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
            <header>{
      findUser.filter((user) => user.id === selectedPost.user_id).map((user) => {
        return ( <UserProfileInfo key={user.id} user={user} /> )
      })
    }
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

           Press to like post:  <BsHeartFill onClick={handleLikes}/> 
           Press to dislike post:<FaHeartBroken  onClick={handleUnlikes}/> 

            <br></br>Likes:

            {likes && likes.filter((like) => like.post_id === selectedPost.id).map((like) => {
            return ( <Likes 
                            key={like.id} 
                            like={like} 
                      />
            )})}
            
            <div>{selectedPost.description}</div>
            <div className="comments">
                <br></br><button onClick={() => setShowComments(true)}>View all comments</button> 
                
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
                   <button  onClick={() => setShowComments(false)}>Collapse Comments</button>
                   </div>
            <button onClick={() => setIsEditingComment(true)}>Add a comment</button>
            <div style={isEditingComment === false ? {display: "none"} : {display: ""}}>
                <form onSubmit={handleCommentSubmit}>
                    <input onChange={(e) => setNewComment(e.target.value)} type="text"/>
                    <button onClick={(e) => {e.stopPropagation()}}>Submit</button>
                </form>
                    <button onClick={(e) => {
                      e.stopPropagation()
                      setIsEditingComment(false)}}>Cancel</button>
            </div>
            </div> 
        </div>
    </div>
    )
}

export default PostCard;