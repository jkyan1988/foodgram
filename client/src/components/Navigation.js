import '../styles/Navigation.scss';
import logo from "../images/instagramLogo.png";
import Menu from "./Menu.js";
import {NavLink} from 'react-router-dom'


function Navigation( { user, handleLogoutClick } ) {
    return(
        
        <div className="navigation">
                    <span> 
                    <NavLink exact to="/profile">
                        <p>Welcome {user && user.username}!</p>
                    </NavLink>
                    <NavLink exact to="/">
                        <button onClick={handleLogoutClick}>Log Out</button>
                    </NavLink>
                    
                    </span>
                    
            <div className="container">
                <NavLink exact to="/">
                <img className="logo" src={logo} alt="instagram logo" />
                </NavLink>
                <Menu user={user}/>
            </div>
            
        </div>
       
      
    )
}

export default Navigation;