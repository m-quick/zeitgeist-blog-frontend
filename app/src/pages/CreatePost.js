import React, { useState } from "react";

function CreatePost() {

    const [title, setTitle] = useState("")
    const [post_text, setPostText] = useState("")

    console.log(title, post_text)

    return (
        <div>
            <h1>Create a post</h1>
            <div>
                <label>Title</label>
                <input placeholder="Title" onChange={(event) => { setTitle(event.target.value) }}></input>
            </div>
            <div>
                <label>Post</label>
                <textarea placeholder="Post" onChange={(event) => { setPostText(event.target.value) }}></textarea>
            </div>
            <button>Submit</button>
        </div >
    );
}

export default CreatePost;