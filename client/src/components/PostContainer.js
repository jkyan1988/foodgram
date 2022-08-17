import React from 'react';
import PostCard from './PostCard';
import '../styles/postcontainer.scss';

function PostContainer( { posts, comments, setComment, setPost  } ){
    
    return(
        <div >
            {posts &&  posts.map((post) => { 
                return (
                <PostCard 
                    key={post.id} 
                    selectedPost={post} 
                    comments={comments} 
                    setComment={setComment}
                    setPost={setPost}
                /> 
                )})} 
        </div>
    )
}

export default PostContainer;