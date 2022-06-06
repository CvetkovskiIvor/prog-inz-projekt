import axios from 'axios';

const postUrl = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/posts`;
const profileUrl = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/profiles`;
const communityUrl = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/communities`;

const API = axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchPosts = () => API.get('/posts');
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}`);
export const fetchPostsByCreator = (username) => axios.get(`${postUrl}/search?creator=${username}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const disLikePost = (id) => API.patch(`/posts/${id}/disLikePost`);

export const fetchProfiles = () => API.get('/profiles');
export const fetchProfilesByURL = (URL) => API.get(`profiles/search?username=${URL}`);
export const createProfile = (newProfile) => API.post('/profiles', newProfile);

export const fetchCommunities = () => API.get('/communities');
export const createCommunity = (newCommunity) => API.post('/communities', newCommunity);

export const singIn = (formData) => API.post('/posts/signin', formData);
export const singUp = (formData) => API.post('/posts/signup', formData);