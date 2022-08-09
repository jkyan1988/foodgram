// import { Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigation from './Navigation';
import Login from "../pages/Login";
import PostContainer from "./PostContainer";

function App() {
  const [user, setUser] = useState(null);
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch("/posts")
        .then((resp) => resp.json())
        .then((posts) => setPost(posts))
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} /> ;

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
    <div>
        <Navigation user={user} handleLogoutClick={handleLogoutClick}/>
        
    </div>
    <PostContainer posts={post}/>
    </div>
  );
}

export default App;
