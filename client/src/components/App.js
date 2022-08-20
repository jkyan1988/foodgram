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

  // return all posts once edited
  function onUpdatePost(updatedPost){
    const filteredPosts = post.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost
      } else {
        return post
      }  
  })
    setPost(filteredPosts)
  }

  // return all comments once edited
  function onUpdateComment(updatedComment){
    const filteredComments = comment.map((comment) => {
      if (comment.id === updatedComment.id) {
        return updatedComment
      } else {
        return comment
    }
  })
    setComment(filteredComments)
  }

  function onUpdateLike(updatedLike){
    const filteredLikes = likes.map((like) => {
      if (like.id === updatedLike.id) {
        return updatedLike
      } else {
        return like
      }
    })
    setLikes(filteredLikes)
  }


// return all posts that's not deleted
  function onDeletePost(id){
    const filteredPostsToo = post.filter((post) => post.id !== id)
    setPost(filteredPostsToo)
  }

  // return all comments that's not deleted
  function onDeleteComment(id){
    const filteredCommentsToo = comment.filter((comment) => comment.id !== id)
    setComment(filteredCommentsToo)
  }

  // const filteredTrueLikes = likes.filter((like) => like.like.includes("true"))
  // const filteredFalseLikes = likes.filter((like) => like.like.includes("false"))


  const filteredUsers = findUser.map((user) => user.username)
  console.log(filteredUsers)
  

  return (
   
     <div>

      
          <Navigation 
          user={user} 
          handleLogoutClick={handleLogoutClick} 
          />
    <div>

      <Switch>
       
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
          onUpdatePost={onUpdatePost}
          onDeletePost={onDeletePost}
          onUpdateComment={onUpdateComment}
          onDeleteComment={onDeleteComment}
          onUpdateLike={onUpdateLike}
          user={user}
          />
        </Route>
        
      </Switch>
    </div>
  
        <div>
          <Switch>
            
            <Route path="/postcard">
              <PostCard 
                posts={post}
                setComment={setComment}
                likes={likes}
                setLikes={setLikes}
                setPost={setPost}
                user={user}
                findUser={findUser}
                onUpdatePost={onUpdatePost}
                onDeletePost={onDeletePost}
                onUpdateComment={onUpdateComment}
                onDeleteComment={onDeleteComment}
                onUpdateLike={onUpdateLike}
                
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
