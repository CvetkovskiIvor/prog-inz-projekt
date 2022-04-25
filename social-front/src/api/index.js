import axios from 'axios';

const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/posts`;

console.log(url);

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const disLikePost = (id) => axios.patch(`${url}/${id}/disLikePost`);

