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

export const fetchPosts = () => axios.get(postUrl);
export const fetchPostsByCreator = (username) => axios.get(`${postUrl}/search?creator=${username}`);
export const createPost = (newPost) => axios.post(postUrl, newPost);
export const likePost = (id) => axios.patch(`${postUrl}/${id}/likePost`);
export const disLikePost = (id) => axios.patch(`${postUrl}/${id}/disLikePost`);

export const fetchProfiles = () => axios.get(profileUrl);
export const fetchProfilesByURL = (URL) => axios.get(`${profileUrl}/search?username=${URL}`);
export const createProfile = (newProfile) => axios.post(profileUrl, newProfile);

export const fetchCommunities = () => API.get('/communities');
export const createCommunity = (newCommunity) => API.post('/communities', newCommunity);

export const singIn = (formData) => API.post('/posts/signin', formData);
export const singUp = (formData) => API.post('/posts/signup', formData);