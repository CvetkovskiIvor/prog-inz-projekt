import * as api from '../api/index.js';

export const signin = (formData) => async (dispatch) => {
    try{
        const {data} = await api.singIn(formData);

        dispatch({type:'AUTH', data});
    

    }catch (error){
        console.log(error);
    }
}

export const signup = (formData) => async (dispatch) => {
    try{
        const {data} = await api.singUp(formData);

        dispatch({type:'AUTH', data});
    

    }catch (error){
        console.log(error);
    }
}