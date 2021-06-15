import axios from "axios";
import * as types from "./types";

const NEWS_API =
  "https://newsapi.org/v2/everything?q=Apple&from=2021-06-11&sortBy=popularity&apiKey=63c7f82e5dc247f4bb0e62aca339392b";

export const getNews = () => async (dispatch) => {
  axios
    .get(`${NEWS_API}`)
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      dispatch({
        type: types.GET_NEWS,
        payload: data.articles,
      });
    });
};
