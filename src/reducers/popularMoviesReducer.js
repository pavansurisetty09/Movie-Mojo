import * as types from "../actions/types";

const initialState = {
  popularMovies: [{}],
  skip: 10,
  total: 0,
  hasMore: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case types.FETCH_MORE:
      return {
        ...state,
        popularMovies: state.popularMovies.slice().concat(action.payload),
      };
    case types.GET_TOTAL_POPULAR:
      return {
        ...state,
        total: action.payload,
      };
    case types.SET_SKIP:
      return {
        ...state,
        skip: state.skip + 1,
      };
    case types.SET_HASMORE:
      return {
        ...state,
        hasMore: false,
      };

    default:
      return state;
  }
};
