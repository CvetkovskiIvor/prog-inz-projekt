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