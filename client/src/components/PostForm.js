import React, { useState } from "react";

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
        <div className="cards">
            <h3 className="cards">Create A Post</h3>
            <form onSubmit={handlePostSubmit}>
                <input onChange={(e) => setPostURL(e.target.value)} />
                <input onChange={(e) => setDescription(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}     
            
export default PostForm;