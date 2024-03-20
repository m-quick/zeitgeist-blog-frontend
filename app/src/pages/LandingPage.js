import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LandingPage(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <Sidebar />
                </Col>
                <Col xs={9}>
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
                </Col>
            </Row>
        </Container >
    )
}

export default LandingPage;