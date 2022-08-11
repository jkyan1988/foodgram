import '../styles/postcard.scss';
import Comment from './Comment';
function PostCard( { post, comments } ){

// const { id, comment } = comments

    return(
        <div className="card">
            <header>header</header>
            <img src={post.post} alt="" className="cardImage"/>
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
    )
}

export default PostCard;