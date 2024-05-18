import axios from "axios";

const api = axios.create({
    baseURL: "https://zeitgeist-blog-api-tgk3y42gxq-uc.a.run.app"
});

export default api;