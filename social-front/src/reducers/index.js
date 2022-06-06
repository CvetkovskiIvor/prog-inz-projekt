import { combineReducers } from "redux";
import posts from './posts';
import profiles from './profiles';
import communities from './communities';
import authReducer from './auth';

export default combineReducers({posts, communities, profiles,authReducer});
