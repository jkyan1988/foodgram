import '../styles/postMenu.scss';
import { ReactComponent as Share } from '../images/share.svg';
import { ReactComponent as Comments } from '../images/comment.svg';
import { ReactComponent as Notifications } from '../images/notifications.svg';
import { ReactComponent as Bookmark } from '../images/bookmark.svg';

function CardMenu() {
    return (
        <div className="cardMenu">
            <div className="interactions">
                <Notifications className="icon" />
                <Comments className="icon" />
                <Share className="icon" />
            </div>
            <Bookmark className="icon" />
        </div>
    )
}

export default CardMenu;