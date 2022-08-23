import '../styles/Explore.scss';
import {NavLink} from 'react-router-dom'

function Explore( { user, posts }){
    return(
        <div style={{
            maxWidth: '600px', margin: '0px auto'
        }}> 
        <div className="gallery">
                {posts.map((post) => {
                    if (post.user_id !== user.id) {
                    return (
                        <img className="item" alt="" src={post.post}/>      
                    )
                }})}

                  
            </div></div>
    )
}

export default Explore;