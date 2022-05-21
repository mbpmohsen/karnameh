import axios from "axios";

const getPosts = async () => {
    const response = await axios.get('http://localhost:3004/posts');
    return {data: response.data};
}

export {getPosts}

