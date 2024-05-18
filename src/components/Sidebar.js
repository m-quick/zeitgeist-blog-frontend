import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import categories from '../data/categories.json';
import React, { useState, useEffect } from "react";
import fetchFilteredPosts from '../api/filterPosts';

function Sidebar({ fetchPosts }) {

    const [category, setCategory] = useState("");
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const [dateError, setdateError] = useState(false);
    const [author, setAuthor] = useState("");

    const validateStartDate = (e) => {
        const selectedDate = new Date(e);
        setstartDate(selectedDate);

        if (selectedDate > endDate) {
            setdateError(true);
        } else {
            setdateError(false);
        }
    }

    const validateEndDate = (e) => {
        const selectedDate = new Date(e);
        setendDate(selectedDate);

        if (startDate > selectedDate) {
            setdateError(true);
        } else {
            setdateError(false);
        }
    }

    const handleFormSubmit = async (e) => {
        const filteredPosts = await fetchFilteredPosts(2);

        // useEffect(() => {
        //     fetchPosts(filteredPosts);
        // }, [fetchPosts]);
    }

    const author_options = [
        { "name": "Either", "value": "either" },
        { "name": "True", "value": "only" },
        { "name": "False", "value": "not" },
    ]

    return (
        <Container className="rounded my-3 py-2" style={{ "background-color": "#e9ecef" }}>
            <h1 class="display-1 fs-2 fw-normal">Filter posts</h1>
            {dateError && <div class="alert alert-danger" role="alert">End date must be after start date!</div>}
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                        {categories.map((category, index) => (
                            <option value={category.code}>{category.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Start date</Form.Label>
                    <Form.Control type="date" value={startDate.toISOString().split('T')[0]} onChange={(e) => validateStartDate(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>End date</Form.Label>
                    <Form.Control type="date" value={endDate.toISOString().split('T')[0]} onChange={(e) => validateEndDate(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>By Martin</Form.Label>
                    <Form.Select value={author} onChange={(e) => setAuthor(e.target.value)}>
                        {author_options.map((option, index) => (
                            <option value={option.code}>{option.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button variant="btn btn-dark" type="submit">
                    Find posts
                </Button>
            </Form>
        </Container>
    )
}

export default Sidebar;