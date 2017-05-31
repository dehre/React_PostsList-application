//import actions
import {FETCH_POSTS,ADD_POST} from "../actions/index";
import _ from "lodash";

export default function postsReducer(state={}, action){
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data,"id");
    case ADD_POST:
      return state;
    default:
      return state;
  }
};
