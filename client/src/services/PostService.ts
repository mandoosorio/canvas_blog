import axios from "axios";

const BLOG_API_BASE_URL = "http://localhost:8080/api/v1/posts";

class PostService {
    getPosts() {
        return axios.get(BLOG_API_BASE_URL);
    }
    addPost(data: any) {
        return axios.post(BLOG_API_BASE_URL, data);
    }
    getPostById(id: any) {
        return axios.get(BLOG_API_BASE_URL + "/" + id);
    }
}

export default new PostService();
