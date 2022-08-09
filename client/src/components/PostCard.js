import '../styles/postcard.scss';

function PostCard( { post } ){
    return(
        <div className="card">
            <header>header</header>
            <img src={post.post} alt="" className="cardImage"/>
            <div>{post.description}</div>
        </div>
    )
}

export default PostCard;