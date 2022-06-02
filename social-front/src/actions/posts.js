import * as api from '../api/index.js';
//Actions used to change state of store
export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
  
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const getPost = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchPost(id);
  
      dispatch({ type: 'FETCH_POST', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: 'LIKE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const disLikePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.disLikePost(id);
  
      dispatch({ type: 'DISLIKE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const commentPost = (value, id) => async (dispatch) => {
    try {

      const { data } = await api.comment(value, id);
  
      dispatch({ type: 'COMMENT', payload: data });
  
      return data.comments;
    } catch (error) {
      console.log(error);
    }
  };
  