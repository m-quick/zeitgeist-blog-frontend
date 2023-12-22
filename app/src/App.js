import './App.css';
import React, { useState, useEffect } from "react";
import api from "./api.js";
import Post from './Post.js';
import Navbar from './Navbar.js';
import Home from './pages/Home.js'
import CreatePost from './pages/CreatePost.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    // <div className="App">
    //   <Navbar />
    //   {posts.map((post, index) => (
    //     <Post
    //       title={post.title}
    //       date={post.pubDate}
    //       content={post.content}
    //     />
    //   ))}
    // </div>
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create_post" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
