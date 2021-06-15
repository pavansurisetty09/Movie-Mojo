import * as types from "../actions/types";

const initialState = {
  news: [{}],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };

    default:
      return state;
  }
};
