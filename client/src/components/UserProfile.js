import '../styles/userprofile.scss';

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
                    <h4>James Kyan</h4>
                    <div style={{display: "flex", justifyContent: "space-between", width:"108%"}}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                    <div>
                        {user.bio}
                    </div>
                </div>
            </div>
            <div className="gallery">
                {posts.map((post) => {
                    return (
                        <img className="item" alt="" src={post.post}/>    
                    )
                })}
                
                  
            </div>
        </div>
    )
}

export default UserProfile;