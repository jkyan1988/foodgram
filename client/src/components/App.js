import { Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigation from './Navigation';
import Login from "../pages/Login";
import PostContainer from "./PostContainer";
import PostForm from './PostForm';

function App() {
  const [ user, setUser ] = useState(null);
  const [ post, setPost ] = useState([])
  const [ comment, setComment ] = useState([])
  
  
  useEffect(() => {
    fetch('/comments')
        .then((resp) => resp.json())
        .then((comments) => setComment(comments))
  }, []);

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
  // const commentsToDisplay = comment.filter(comment => comment.post_id === post.id)
  


  return (
    <div>
    <div>
        <Navigation 
          user={user} 
          handleLogoutClick={handleLogoutClick} 
         
        />
        
    </div>
        <PostForm
          post={post} 
          setPost={setPost}
          user={user}
        />
        <PostContainer 
          posts={post} 
          comments={comment}
        />

        <div>
          <Switch>
            <Route path="/postform">
              <PostForm 
                post={post} 
                setPost={setPost}
                user={user}
              />
            </Route>
            <Route path="/postcontainer">
              <PostContainer 
                posts={post} 
                comments={comment}
              />
            </Route>



          </Switch>

        </div>
    </div>
  );
}

export default App;
