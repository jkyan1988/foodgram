import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";



function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <div > 
          <LoginForm onLogin={onLogin} />
          <div className="container">
          <p className="box">
            Don't have an account? &nbsp;
            <button className="signup" color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
          </div>
        </div>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <div className="container">
          <p className="box">
            Already have an account? &nbsp;
            <button className="signup" color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
          </div>
        </>
      )}
    </div>
  );
}


export default Login;