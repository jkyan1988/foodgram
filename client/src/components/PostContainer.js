import React from 'react';
import PostCard from './PostCard';
import '../styles/postcontainer.scss';

function PostContainer( { posts } ){
    console.log(posts)
    return(
        <div className="cards">
            {posts.map((post) => { return <PostCard key={post.id} post={post} /> }) }
            
        </div>
    )
}

export default PostContainer;