import Post from "../components/Post";

function LandingPage(props) {
    return (
        <div>
            <h1>Posts</h1>
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