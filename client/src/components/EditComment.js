

function EditComment( { handleSubmit, setEditComment}) {
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setEditComment(e.target.value)}/>
                <button>Edit</button>    
            </form>  
        </div>
    )
}

export default EditComment;