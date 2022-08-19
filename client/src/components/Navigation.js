import '../styles/Navigation.scss';
import Menu from "./Menu.js";
import {NavLink} from 'react-router-dom'


function Navigation( { user, handleLogoutClick } ) {
    return(
        <div className="navigation"> 
                <NavLink exact to="/">
                <h1>FOODGRAM</h1>
                </NavLink>        
            <div className="container">
                <Menu user={user} handleLogoutClick={handleLogoutClick}/>
            </div> 
        </div>
    )
}

export default Navigation;