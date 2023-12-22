import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js'
import CreatePost from './pages/CreatePost.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
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
