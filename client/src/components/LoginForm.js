import React, { useState } from "react";
import {useHistory} from 'react-router-dom'

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => alert(err.errors));
      }
    });
  }

  return (
    
     <div className="container">
     <div className="box">
       <div className="heading"></div>
       <form className="login-form" onSubmit={handleSubmit}>
         <div className="field">
           <input
             id="username"
             type="name"
             placeholder="Phone number, username, or email"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
           />
           <label for="username">Phone number, username, or email</label>
         </div>
         <div className="field">
            <input 
                id="password" 
                type="password" 
                placeholder="password" 
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
           <label for="password">Password</label>
         </div>
           <button className="login-button" title="login" variant="fill" color="primary" type="submit">Log In</button>
           <div className="separator">
             
        
             
           </div>
         
       </form>
     </div>
     {/* <div class="box">
       <p>Don't have an account? <a class="signup" href="#">Sign Up</a></p>
     </div> */}
   </div>
   
  );
}

export default LoginForm;
