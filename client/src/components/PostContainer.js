import React from 'react';
import PostCard from './PostCard';
import '../styles/postcontainer.scss';


function PostContainer( { posts, comments, commentsToDisplay } ){

    // const commentsToDisplay = comments.filter(comment => comment.post_id === posts.id)

    return(
        <div className="cards">
            {posts.map((post) => { 
                return (
                <PostCard 
                    key={post.id} 
                    post={post} 
                    comments={comments} 
                    commentsToDisplay={commentsToDisplay}
                /> 
                
                )})}
                
            
        </div>
    )
}

export default PostContainer;