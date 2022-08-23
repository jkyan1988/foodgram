import "../styles/menu.scss";
import { ReactComponent as Home } from '../images/home.svg';
import image from "../images/profile.jpg";
import ProfileIcon from './ProfileIcon';
import {NavLink} from 'react-router-dom'
import { GrLogout } from 'react-icons/gr';
import { MdOutlineExplore } from 'react-icons/md';

function Menu( { user, handleLogoutClick }) {
    return(
        <div>
            <NavLink exact to="/">
            <h4 className="foodgram">FOODGRAM</h4>
            </NavLink>  
            <div>
                <div className="menu">
            <NavLink exact to="/">
            <Home className="icon" />
            </NavLink>
            <NavLink exact to="/profile">
            <ProfileIcon user={user} iconSize="small" image={image}/>
            </NavLink>
            <NavLink exact to="/explore">
            <MdOutlineExplore className="icon"/>
            </NavLink>
            <GrLogout onClick={handleLogoutClick} style={{ marginLeft: "15px"}} className="icon"></GrLogout>
                </div>
            </div>
        </div>
    )
}

export default Menu;