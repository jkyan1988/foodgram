import { Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigation from './Navigation';
import Login from "../pages/Login";
import PostContainer from "./PostContainer";
import PostForm from './PostForm';

function App() {
  const [ user, setUser ] = useState(null);
  const [ post, setPost ] = useState([])


  const [newPost, setNewPost ] = useState({
    post: "",
    description: "",
  });

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

  function handlePostSubmit(e) {
    e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then(r => r.json())
      .then(newPost => setPost([newPost, ...post]))
      e.target.reset()
  }
  console.log(post)

  return (
    <div>
    <div>
        <Navigation 
          user={user} 
          handleLogoutClick={handleLogoutClick} 
          handlePostSubmit={handlePostSubmit}
        />
        
    </div>
        <PostContainer 
          posts={post} 
          handlePostSubmit={handlePostSubmit}
        />

        <div>
          <Switch>
            <Route path="/postform">
              <PostForm 
                handlePostSubmit={handlePostSubmit} 
                post={post}
              />
            </Route>
            <Route path="/postcontainer">
              <PostContainer />
            </Route>



          </Switch>

        </div>
    </div>
  );
}

export default App;
