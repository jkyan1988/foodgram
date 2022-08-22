import '../styles/Navigation.scss';
import Menu from "./Menu.js";
import {NavLink} from 'react-router-dom'


function Navigation( { user, handleLogoutClick } ) {
    return(
        <div className="navigation"> 
                      
            <div>
                <Menu user={user} handleLogoutClick={handleLogoutClick}/>
            </div> 
        </div>
    )
}

export default Navigation;