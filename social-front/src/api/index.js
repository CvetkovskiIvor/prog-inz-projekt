import axios from 'axios';

const postUrl = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/posts`;
const profileUrl = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/profiles`;
const communityUrl = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/communities`;

//const API = axios.create({baseURL: 'http://localhost:5000'});

export const fetchPosts = () => axios.get(postUrl); //API.get('/posts');
export const createPost = (newPost) => axios.post(postUrl, newPost);
export const likePost = (id) => axios.patch(`${postUrl}/${id}/likePost`);
export const disLikePost = (id) => axios.patch(`${postUrl}/${id}/disLikePost`);

export const fetchProfiles = () => axios.get(profileUrl);
export const createProfile = (newProfile) => axios.post(profileUrl, newProfile);

export const fetchCommunities = () => axios.get(communityUrl);
export const createCommunity = (newCommunity) => axios.post(communityUrl, newCommunity);

export const singIn = (formData) => axios.post(`${postUrl}/signin`, formData);
export const singUp = (formData) => axios.post(`${postUrl}/signup`, formData);