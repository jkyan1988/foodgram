import '../styles/userprofile.scss';
import { NavLink } from 'react-router-dom';

function UserProfile( { user, posts }){
    return (
        <div style={{
            maxWidth: '550px', margin: '0px auto'
        }}>
            <div style={{ 
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "18px 0px",
                    borderBottom: "1px solid grey"

                }}>
                <div>
                    <img style={{width:"160px", height: "160px", borderRadius:"80px"}} alt=""
                    src={user.profile_pic}
                    />
                </div>
                <div>
                    <h4>{user.username}</h4>
                    <div style={{display: "flex", justifyContent: "space-between", width:"108%"}}>
                        
                    </div>
                    <div>
                       About me: {user.bio}
                    </div>
                </div>
            </div>
            <div className="gallery">
                {posts.map((post) => {
                    if (post.user_id === user.id) {
                    return (
                        <img className="item" alt="" src={post.post}/>   
                    )
                }})}

                  
            </div>
        </div>
    )
}

export default UserProfile;