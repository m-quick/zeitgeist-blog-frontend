import './style.css'

function Navbar() {
    return (
        <nav className="nav">
            <a href="/posts" className="blog-title">Martin's blog</a>
            <ul>
                <li>
                    <a href="/posts">Posts</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>);
}

export default Navbar;