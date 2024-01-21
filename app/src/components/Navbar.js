import '../App.css'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <div class="container">
                <h2>
                    <Link to="/" class="navbar-brand fs-4 fw-normal">
                        {/* <img src="favicon.png" alt="" /> */}
                        Zeitgeist
                    </Link>
                </h2>
                <ul class="navbar-nav mr-auto fs-6">
                    <li class="nav-item">
                        <Link to="/create_post" class="nav-link">New post</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link">About</Link>
                    </li>
                </ul>
            </div>
        </nav>);
}

export default Navbar;