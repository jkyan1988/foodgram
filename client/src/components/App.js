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

 
  useEffect(() => {
    fetch('/comments')
        .then((resp) => resp.json())
        .then((comments) => setComment(comments))
  }, []);

  useEffect(() => {
    fetch('/users')
        .then((resp) => resp.json())
        .then((users) => setFindUser(users))
  }, []);

  useEffect(() => {
    fetch("/posts")
        .then((resp) => resp.json())
        .then((posts) => setPost(posts))
  }, []);

  useEffect(() => {
    fetch("/likes")
        .then((resp) => resp.json())
        .then((likes) => setLikes(likes))
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
  // map the list of users then filter them by post.user_id
  // const findUser = user.find(user => user.username === post.user_id)
  // const mapUsers = findUser.map((user) => user.username)
  // const filterMapUsers = mapUsers.filter((post) => post.user_id=== user.id )
 
  return (
    <div>
    <div>
      <Switch>
        <Route path="/">
        <Navigation 
          user={user} 
          handleLogoutClick={handleLogoutClick} 
        />
        </Route>
      </Switch>
        
    </div>
        <Switch>
        
        <Route path="/profile">
              <UserProfile user={user} posts={post}/>
            </Route>
        </Switch>
        <PostForm
          post={post} 
          setPost={setPost}
        />
        <PostContainer 
          posts={post} 
          comments={comment}
          setComment={setComment}
        />
        <div>
          <Switch>
            
            <Route path="/postform">
              <PostForm 
                post={post} 
                setPost={setPost}
              />
            </Route>
            <Route path="/postcontainer">
              <PostContainer 
                 posts={post} 
                 comments={comment}
                 setComment={setComment}
              />
            </Route>
            <Route path="/postcard">
              <PostCard 
                posts={post}
                setComment={setComment}
                likes={likes}
                setLikes={setLikes}
                setPost={setPost}
              />

            </Route>
            


          </Switch>

        </div>
    </div>
  );
}

export default App;
