import * as api from '../api/index.js';
//Actions used to change state of store
export const getCommunities = () => async (dispatch) => {
    try {
      const { data } = await api.fetchCommunities();
  
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const createCommunity= (community) => async (dispatch) => {
    try {
      const { data } = await api.createPost(community);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };