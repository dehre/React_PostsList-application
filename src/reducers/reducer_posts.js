//import actions
import {FETCH_POSTS,CREATE_POST} from "../actions/index";
import _ from "lodash";

export default function postsReducer(state={}, action){
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data,"id");
    case CREATE_POST:
      return state;
    default:
      return state;
  }
};
