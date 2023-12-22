import '../App.css'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav">
            <a href="/posts" className="blog-title">Martin's blog</a>
            <ul>
                <li>
                    <Link to="/posts" >Posts</Link>
                </li>
                <li>
                    <Link to="/about" >About</Link>
                </li>
            </ul>
        </nav>);
}

export default Navbar;