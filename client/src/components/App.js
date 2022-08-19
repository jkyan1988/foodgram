import { Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigation from './Navigation';
import Login from "../pages/Login";
import PostContainer from "./PostContainer";
import PostForm from './PostForm';
import PostCard from './PostCard';
import UserProfile from './UserProfile';


function App() {
  const [ user, setUser ] = useState(null);
  const [ post, setPost ] = useState([])
  const [ comment, setComment ] = useState([])
  const [ likes, setLikes ] = useState([]);
  const [ findUser, setFindUser ] = useState([]);

 // all comments
  useEffect(() => {
    fetch('/comments')
        .then((resp) => resp.json())
        .then((comments) => setComment(comments))
  }, []);
// all users
  useEffect(() => {
    fetch('/users')
        .then((resp) => resp.json())
        .then((users) => setFindUser(users))
  }, []);
// all posts
  useEffect(() => {
    fetch("/posts")
        .then((resp) => resp.json())
        .then((posts) => setPost(posts))
  }, []);
// all likes
  useEffect(() => {
    fetch("/likes")
        .then((resp) => resp.json())
        .then((likes) => setLikes(likes))
  }, []);
// self login user
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} /> ;

// logout button
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
          <Navigation 
          user={user} 
          handleLogoutClick={handleLogoutClick} 
          />
      <Switch>
        <Route path="/">
        <Route path="/profile">
          <UserProfile user={user} posts={post}/>
        </Route>
          <Route path="/">
          <PostForm
          post={post} 
          setPost={setPost}
          />
          <PostContainer 
          posts={post} 
          comments={comment}
          setComment={setComment}
          setPost={setPost}
          likes={likes}
          setLikes={setLikes}
          findUser={findUser}
          />
          </Route>
        </Route>
      </Switch>
    </div>
        <div>
          <Switch>
            
            <Route path="/post/:id">
              <PostCard 
                posts={post}
                setComment={setComment}
                likes={likes}
                setLikes={setLikes}
                setPost={setPost}
                user={user}
                findUser={findUser}
              />
            </Route>
            <Route path="/login">
          <Login onLogin={setUser}/>
          </Route>
          </Switch>
        </div>
    </div>
  );
}

export default App;
