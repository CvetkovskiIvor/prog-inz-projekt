import { combineReducers } from "redux";
import posts from './posts';
import profiles from './profiles';
import communities from './communities';

const reducers = combineReducers({posts, communities, profiles});
export default reducers; 