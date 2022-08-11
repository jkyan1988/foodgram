import React, { useState } from "react";


function PostForm( { post, setPost, user } ){
    const [ postURL, setPostURL ] = useState("");
    const [ description, setDescription ] = useState("");
    const newArray = {...post}
  

    function handlePostSubmit(e) {
        e.preventDefault();
        
        fetch("/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(
            {
              post: postURL,
              description: description,
              user_id: user.id,
            }
          ),
        }).then(r => r.json())
          .then(newPost => setPost([newPost, newArray]))
          e.target.reset()
      }
      console.log(user)
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