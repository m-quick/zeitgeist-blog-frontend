import Post from '../components/Post.js';
import React, { useState, useEffect } from "react";
import api from "../api.js";

function Home() {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await api.get("/")
        setPosts(response.data.posts)
    };

    useEffect(() => {
        fetchPosts()
    }, []);

    return (
        <div>
            {posts.map((post, index) => (
                <Post
                    title={post.title}
                    date={post.pubDate}
                    content={post.content}
                />
            ))}
        </div>
    );
}

export default Home;