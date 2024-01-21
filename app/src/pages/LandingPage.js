import Post from "../components/Post";

function LandingPage(props) {
    return (
        <div>
            <div className="container rounded">
                <h1 class="display-1 fs-2 fw-normal my-3">Blog posts</h1>
            </div>
            {props.posts.map((post, index) => (
                <Post
                    id={post.id}
                    title={post.title}
                    date={post.pubDate}
                    content={post.content}
                />
            ))}
        </div>
    )
}

export default LandingPage;