function PostPage(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <time>{props.date}</time>
            <p>{props.content}</p>
        </div>
    );
}

export default PostPage;