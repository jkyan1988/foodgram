import React, { useState } from "react";


function PostForm( { handlePostSubmit, post } ){
    const [ postURL, setPostURL ] = useState("");
    const [ description, setDescription ] = useState("");
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