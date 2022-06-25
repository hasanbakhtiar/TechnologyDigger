import { combineReducers, createStore } from "redux";
import blogReducer from '../reducers/reducerBlog';

// Store Start
export default () => {
 const store = createStore(
    combineReducers({
      item: blogReducer,
      // itme2: blogReducer1,
    })
  );
  return store;
};
// Store END
