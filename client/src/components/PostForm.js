import React, { useState } from "react";


function PostForm( { setPost, post, user } ){
    const [ postURL, setPostURL ] = useState("");
    const [ description, setDescription ] = useState("");
    const copyPostArray = {...post}

    function handlePostSubmit(e) {
        e.preventDefault();
        fetch("/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            {
              post: postURL,
              description: description,
            }
          ),
        }).then(r => r.json())
          .then(newPost => setPost([newPost, copyPostArray]))
          e.target.reset()
      }
    return(
        <div>
            <h3>New Post</h3>
            <form onSubmit={handlePostSubmit}>
                <input onChange={(e) => setPostURL(e.target.value)} placeholder="Pic or Video" />
                <input onChange={(e) => setDescription(e.target.value)} placeholder="Caption" />
                <button>Submit</button>
            </form>
        </div>
    )
}     
            
export default PostForm;