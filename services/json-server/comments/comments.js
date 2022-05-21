import axios from "axios";

const getComments = (id) => {
    return axios.get(`http://localhost:3004/comments/?postId=${id}`);
}

const setComment = async (data) => {
    return axios.post(`http://localhost:3004/comments`, data);
}

const updateComments = async (id, data) => {
    const headers = {"Content-Type": "application/json"}
    return axios.patch(`http://localhost:3004/comments/${id}`, data, {headers});
}

export {getComments, setComment, updateComments}

