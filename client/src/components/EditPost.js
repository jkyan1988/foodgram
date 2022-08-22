
 
function EditPost( { 
                        isEditing,
                        handleSubmit,
                        setEditDescription,
                        setEditPost,
                        setIsEditing
                }){

    return(
        <div style={isEditing === false ? {display: "none"} : {display: ""}}>
                <h3>Edit Post</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Post URL" onChange={(e) => setEditPost(e.target.value)}/>
                    <input type="text" placeholder="Caption" onChange={(e) => setEditDescription(e.target.value)}/>
                    <button>Submit</button>
                    <button onClick={(e) => {
                      e.stopPropagation()
                      setIsEditing(false)}}>Cancel</button>
                </form>
            </div>
    )
}

export default EditPost;