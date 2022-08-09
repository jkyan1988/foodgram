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
          <div class="container">
          <p class="box">
            Don't have an account? &nbsp;
            <button class="signup" color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
          </div>
        </div>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <div class="container">
          <p class="box">
            Already have an account? &nbsp;
            <button class="signup" color="secondary" onClick={() => setShowLogin(true)}>
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