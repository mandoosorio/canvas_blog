import { useState } from "react";
import PostService from "../services/PostService";

function AddPost() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function addPost(event: any) {
        event.preventDefault();
        const details = {
            postTitle: title,
            postBody: body
        }
        PostService.addPost(details).then((res) => {
            
        })
    }
    return (
        <div className="post card">
            <div className="card-header">
                <h2>Create New Post</h2>
            </div>
            <form id="new-post-form" className="card-body" onSubmit={addPost}>
                <label className="form-label" htmlFor="post-title">Title</label>
                <input type="text" name="post-title" className="form-input" 
                onChange={(event) => {
                    setTitle(event.target.value);
                }}/>

                <label className="form-label" htmlFor="post-body">Content</label>
                <textarea name="post-body" className="form-input"
                onChange={(event) => {
                    setBody(event.target.value);
                }}
                ></textarea>

                <button type="submit" className="btn">Create</button>
            </form>
        </div>
    )
}

export default AddPost;