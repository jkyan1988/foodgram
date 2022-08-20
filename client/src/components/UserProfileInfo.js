import '../styles/userprofileinfo.scss';

function UserProfileInfo( { user }){
    return(
        <div>
            <img src={user.profile_pic} className="userpost"/>
            <span><h4>{user.username}</h4></span>
        </div>
    )
}
export default UserProfileInfo;