import React from 'react';
import PostCard from './PostCard';
import '../styles/postcontainer.scss';

function PostContainer( {   posts, 
                            comments, 
                            setComment, 
                            setPost, 
                            handleDeleteLikes, 
                            findUserName, 
                            likes,
                            setLikes
                        } 
                        )
                        {
    const { id, like, post_id, user_id } = likes
    
    return(
        <div >
            {posts  &&  posts.map((post) => { 
                return (
                <PostCard 
                    key={post.id} 
                    selectedPost={post} 
                    comments={comments} 
                    setComment={setComment}
                    setPost={setPost}
                    handleDeleteLikes={handleDeleteLikes}
                    findUserName={findUserName}
                    likes={likes}
                    setLikes={setLikes}
                /> 
                )})} 
                
        </div>
    )
}

export default PostContainer;