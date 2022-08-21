import '../styles/userprofileinfo.scss';

function UserProfileInfo( { user }){
    return(
        <div>
            <div>
                <img src={user.profile_pic} className="userpost"/>
                <span className="username">{user.username}</span>
            </div>
                {/* <h4 className="username">{user.username}</h4> */}
        </div>
    )
}
export default UserProfileInfo;