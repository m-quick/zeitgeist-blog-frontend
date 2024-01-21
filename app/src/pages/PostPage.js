function PostPage(props) {
    return (
        <div class="container">
            <h1 class="display-6 fs-1 my-3">{props.title}</h1>
            <small class="text-muted">{props.date}</small>
            <p class="my-3">{props.content}</p>
        </div>
    );
}

export default PostPage;