import * as types from "../actions/types";

const initialSTate = {
  movies: [{}],
  movies1: [{}],
  movies2: [{}],
  movies3: [{}],
  movies4: [{}],
};

export default (state = initialSTate, action) => {
  switch (action.type) {
    case types.GET_SLIDERMOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case types.GET_SLIDERMOVIES1:
      return {
        ...state,
        movies1: action.payload,
      };
    case types.GET_SLIDERMOVIES2:
      return {
        ...state,
        movies2: action.payload,
      };
    case types.GET_SLIDERMOVIES3:
      return {
        ...state,
        movies3: action.payload,
      };
    case types.GET_SLIDERMOVIES4:
      return {
        ...state,
        movies4: action.payload,
      };
    default:
      return state;
  }
};
