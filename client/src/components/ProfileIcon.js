import "../styles/profileIcon.scss";

function ProfileIcon(props) {
    const { iconSize, storyBorder, image, user } = props;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomId = getRandomInt(1, 70);

    return (
        <div className={storyBorder ? "storyBorder" : ""}>
            <img 
                className={`profileIcon ${iconSize}`} 
                src={user.profile_pic} 
                alt="profile"
            />
        </div>
    )
}

export default ProfileIcon;