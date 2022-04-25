import axios from 'axios';

const postUrl = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/posts`;
const profileUrl = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/profiles`;
const communityUrl = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/communities`;


export const fetchPosts = () => axios.get(postUrl);
export const createPost = (newPost) => axios.post(postUrl, newPost);

export const fetchProfiles = () => axios.get(profileUrl);
export const createProfile = (newProfile) => axios.post(profileUrl, newProfile);

export const fetchCommunities = () => axios.get(communityUrl);
export const createCommunity = (newCommunity) => axios.post(communityUrl, newCommunity);