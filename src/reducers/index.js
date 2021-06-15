import { combineReducers } from "redux";
import movieCardReducer from "./movieCardReducer";
import newsReducer from "./newsReducer";
import popularMoviesReducer from "./popularMoviesReducer";
import trendingMoviesReducer from "./trendingMoviesReducer";
import sliderReducer from "./sliderReducer";

export default combineReducers({
  movieCard: movieCardReducer,
  popularMovies: popularMoviesReducer,
  trendingMovies: trendingMoviesReducer,
  newsCards: newsReducer,
  slider: sliderReducer,
});
