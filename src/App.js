import './App.css';
import Navbar from './components/Navbar.js';
import CreatePost from './pages/CreatePost.js'
import PostPage from './pages/PostPage.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import api from "./api/api.js";
import LandingPage from "./pages/LandingPage.js"
import About from "./pages/About.js"

function App() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async (id = 1) => {
    const response = await api.get(`/posts?id=${id}`);
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage posts={posts} fetchPosts={fetchPosts} />}></Route>
        <Route path="/create_post" element={<CreatePost />} />
        {posts.map(post => (
          <Route
            key={post.id}
            path={`/posts/${post.id}`}
            element={<PostPage
              title={post.title}
              date={post.pubDate}
              content={post.content}
            />}
          />
        ))}
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
