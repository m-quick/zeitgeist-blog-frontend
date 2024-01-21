import React, { useState } from "react";
import api from "../api.js"


function CreatePost() {

    const [title, setTitle] = useState("")
    const [post_text, setPostText] = useState("")
    const [successMessage, setSuccessMessage] = useState(false);

    const addPost = async () => {
        try {
            const response = await api.post("create_post", { "title": title, "content": post_text });
            if (response.data === true) {
                setSuccessMessage(true);
            }
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };

    return (
        <div class="container">
            <h1 class="display-6 fs-1 my-3">Create a post</h1>
            {successMessage && <div class="alert alert-success" role="alert">Post added!</div>}
            <form>
                <div class="form-group my-3">
                    <label>Title</label>
                    <input class="form-control my-2" placeholder="Post title" onChange={(event) => { setTitle(event.target.value) }}></input>
                </div>
                <div class="form-group my-3">
                    <label>Post</label>
                    <textarea class="form-control my-2" placeholder="Post content" onChange={(event) => { setPostText(event.target.value) }}></textarea>
                </div>
                <button type="submit" class="btn btn-outline-dark" onClick={addPost}>Submit</button>
            </form>
        </div >
    );
}

export default CreatePost;