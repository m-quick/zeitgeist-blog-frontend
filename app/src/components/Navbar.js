import '../App.css'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="blog-title">Martin's blog</Link>
            <ul>
                <li>
                    <Link to="/create_post" >New post</Link>
                </li>
                <li>
                    <Link to="/about" >About</Link>
                </li>
            </ul>
        </nav>);
}

export default Navbar;