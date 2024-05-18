import api from './api.js';

async function fetchFilteredPosts(id) {
    const response = api.get(`/posts?id=${id}`);
    const data = await response.data;
    return data;
}

export default fetchFilteredPosts;