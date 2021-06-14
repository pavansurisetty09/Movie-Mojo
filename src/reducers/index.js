import { combineReducers } from "redux";
import movieCardReducer from "./movieCardReducer";

export default combineReducers({
  movieCard: movieCardReducer,
});
