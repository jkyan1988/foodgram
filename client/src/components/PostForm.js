import React, { useState } from "react";
import '../styles/postform.scss'

function PostForm( { post, setPost } ){
    const [ postURL, setPostURL ] = useState("");
    const [ description, setDescription ] = useState("");

    // SUBMIT POST
    function handlePostSubmit(e) {
        e.preventDefault();
        fetch("/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json",
          },
          body: JSON.stringify(
            {
              post: postURL,
              description: description,
            }
          ),
        }).then(r => r.json())
          .then(newPost => setPost([newPost, ...post]))
          e.target.reset()
      }
    return(
        <div className="create-post">
            <h3 className="post-title">Post it!</h3>
            <form  onSubmit={handlePostSubmit}>
                <input className="post-form" placeholder="add URL" onChange={(e) => setPostURL(e.target.value)} />
                <input className="desc-form" placeholder="add description" onChange={(e) => setDescription(e.target.value)} />
                <button className="submit-form-btn">Submit</button>
            </form>
        </div>
    )
}     
            
export default PostForm;