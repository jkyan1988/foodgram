import React, { useState } from "react";


function PostForm( { post, setPost } ){
    const [ postURL, setPostURL ] = useState("");
    const [ description, setDescription ] = useState("");

  
    // console.log(post)

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
        <div>
            <h3>New Post</h3>
            <form onSubmit={handlePostSubmit}>
                <input onChange={(e) => setPostURL(e.target.value)} />
                <input onChange={(e) => setDescription(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}     
            
export default PostForm;