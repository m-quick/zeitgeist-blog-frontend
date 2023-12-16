function Post(props) {

    return (
        <div>
            <h2>{props.title}</h2>
            <time>{props.date}</time>
            <p>{props.content.slice(0, 100) + "..."}</p>
        </div>
    );
}

export default Post;