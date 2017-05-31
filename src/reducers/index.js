//import reducers
import postsReducer from "./reducer_posts";

import { combineReducers } from 'redux';



const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
