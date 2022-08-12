import React from 'react';
import PostCard from './PostCard';
import '../styles/postcontainer.scss';
import Comment from './Comment'

function PostContainer( { posts, comments, user, setPost  } ){

    // const commentsToDisplay = comments.filter(comment => comment.post_id === posts.id)
    
    return(
        <div className="cards">
            {posts.map((post) => { 
                return (
                <PostCard 
                    key={post.id} 
                    post={post} 
                    comments={comments} 
                    user={user}
                    setPost={setPost}
                 
                /> 
                
                )})}
                
           {/* <div> {comments.filter((comment) => comment.post_id === posts.id).map((comment) => {
            return (<Comment key={comment.id} comment={comment} />)
           })}</div> */}
        </div>
    )
}

export default PostContainer;