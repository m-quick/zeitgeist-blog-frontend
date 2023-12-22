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
        <div>
            <h1>Create a post</h1>
            {successMessage && <div class="alert alert-success" role="alert">Post added!</div>}
            <div>
                <label>Title</label>
                <input placeholder="Title" onChange={(event) => { setTitle(event.target.value) }}></input>
            </div>
            <div>
                <label>Post</label>
                <textarea placeholder="Post" onChange={(event) => { setPostText(event.target.value) }}></textarea>
            </div>
            <button onClick={addPost}>Submit</button>
        </div >
    );
}

export default CreatePost;