import './App.css';
import React, { useState, useEffect } from "react";
import api from "./api.js";
import Post from './Post.js';

function App() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await api.get("/")
    setPosts(response.data.posts)
  };

  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <div className="App">
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

export default App;
