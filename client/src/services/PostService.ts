import axios from "axios";

const BLOG_API_BASE_URL = "http://localhost:8080/api/v1/canvas_blog_db";

class PostService {
    getPosts() {
        return axios.get(BLOG_API_BASE_URL);
    }
}

export default new PostService();
