import axios from "axios";

const getPost = async (id) => {
    const response = await axios.get(`http://localhost:3004/posts/${id}`);
    return {data: response.data};
}

const setPost = async (data) => {
    return axios.post(`http://localhost:3004/posts`, data);
}

export {getPost, setPost}

