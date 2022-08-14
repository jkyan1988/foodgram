import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import '../styles/postcontainer.scss';
import Comment from './Comment'

function PostContainer( { posts, comments, user, setPost, setComment  } ){
    // const [ newComment, setNewComment ] = useState([])
    const [ newData, setNewData ] = useState({
        comment: "",
    });
    const [showForm, setShowForm] = useState(false);
    
    function handleChange(e) {
        setNewData({ ...newData, [e.target.name]: e.target.value });
      }
    // function showFormClick(post) {
    //     setShowForm(!showForm);
    //     if (showForm == true) {
    //       setSelectedReview({});
    //     } else if (showForm == false) {
    //       setSelectedReview(review);
    //     }
    //   }
    return(
        <div >
            {posts.map((post) => { 
                return (
                <PostCard 
                    key={post.id} 
                    selectedPost={post} 
                    comments={comments} 
                    user={user}
                    setPost={setPost}
                    setComment={setComment}
                    handleChange={handleChange}
                    newData={newData}
                    setNewData={setNewData}
                 
                /> 
                )})} 
        </div>
    )
}

export default PostContainer;