import "../styles/menu.scss";
import { ReactComponent as Home } from '../images/home.svg';

import { ReactComponent as Explore} from '../images/explore.svg';
import { ReactComponent as Notifications } from '../images/notifications.svg';
import image from "../images/profile.jpg";
import ProfileIcon from './ProfileIcon';
import {NavLink} from 'react-router-dom'

function Menu( { user }) {
    return(
        <div className="menu">
            <NavLink exact to="/">
            <Home className="icon" />
            </NavLink>
           
            <Explore className="icon" />
            <Notifications className="icon" />
            <NavLink exact to="/profile">
            <ProfileIcon user={user} iconSize="small" image={image}/>
            </NavLink>
        </div>
    )
}

export default Menu;