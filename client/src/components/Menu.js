import "../styles/menu.scss";
import { ReactComponent as Home } from '../images/home.svg';
import image from "../images/profile.jpg";
import ProfileIcon from './ProfileIcon';
import {NavLink} from 'react-router-dom'
import { GrLogout } from 'react-icons/gr';

function Menu( { user, handleLogoutClick }) {
    return(
        <div className="menu">
            <NavLink exact to="/">
                <h1>FOODGRAM</h1>
                </NavLink>  
            <NavLink exact to="/">
            <Home className="icon" />
            </NavLink>
            <NavLink exact to="/profile">
            <ProfileIcon user={user} iconSize="small" image={image}/>
            </NavLink>
            <GrLogout onClick={handleLogoutClick} style={{ marginLeft: "15px"}} className="icon"></GrLogout>
        </div>
    )
}

export default Menu;