import '../styles/postcard.scss';
import Comment from './Comment';
function PostCard( { post, comments, commentsToDisplay} ){

const { id, comment } = comments

    return(
        <div className="card">
            <header>header</header>
            <img src={post.post} alt="" className="cardImage"/>
            <div>{post.description}</div>
            <div>
                
            </div>
           
        </div>
    )
}

export default PostCard;