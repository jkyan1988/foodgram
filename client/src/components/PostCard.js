import '../styles/postcard.scss';
import Comment from './Comment';
import PostMenu from './PostMenu'
import { ReactComponent as CardButton } from '../images/cardButton.svg';



function PostCard( { post, comments } ){

// const { id, comment } = comments

    return(
    <div className="cards">
        <div className="card">
            <header>header
            <CardButton className="cardButton" />
            </header>
            <img src={post.post} alt="" className="cardImage"/>
            <PostMenu />
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
    </div>
    )
}

export default PostCard;