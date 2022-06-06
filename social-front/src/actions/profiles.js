import * as api from '../api/index.js';
//Actions used to change state of store
export const getProfiles= () => async (dispatch) => {
  try {
    const { data } = await api.fetchProfiles();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getProfilesByURL= (URL) => async (dispatch) => {
  try {
    const { data } = await api.fetchProfilesByURL(URL);

    dispatch({ type: 'FETCH_BY_URL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createProfile= (profile) => async (dispatch) => {
  try {
    const { data } = await api.createPost(profile);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};