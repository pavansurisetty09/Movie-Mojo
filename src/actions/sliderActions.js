import axios from "axios";
import * as types from "./types";

const SLIDERMOVIES_API = `https://api.themoviedb.org/3/discover/movie?/sort_by=popularity.desc&api_key=e0936b38f3d577200421f706a99badd3&page`;
const SEARCHEDMOVIES_API_1 = `https://api.themoviedb.org/3/search/movie?api_key=e0936b38f3d577200421f706a99badd3&language=en-US&query`;
const SEARCHEDMOVIES_API_2 = `page=1&include_adult=true`;

export const getSliderMovies = () => async (dispatch) => {
  axios
    .get(`${SLIDERMOVIES_API}=4`)
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: types.GET_SLIDERMOVIES,
        payload: data.results,
      });
    });
};

export const getSliderMovies1 = () => async (dispatch) => {
  axios
    .get(`${SLIDERMOVIES_API}=9`)
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: types.GET_SLIDERMOVIES1,
        payload: data.results,
      });
    });
};

export const getSliderMovies2 = () => async (dispatch) => {
  axios
    .get(`${SLIDERMOVIES_API}=3`)
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: types.GET_SLIDERMOVIES2,
        payload: data.results,
      });
    });
};

export const getSliderMovies3 = () => async (dispatch) => {
  axios
    .get(`${SLIDERMOVIES_API}=6`)
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: types.GET_SLIDERMOVIES3,
        payload: data.results,
      });
    });
};

export const getSliderMovies4 = () => async (dispatch) => {
  axios
    .get(`${SLIDERMOVIES_API}=8`)
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: types.GET_SLIDERMOVIES4,
        payload: data.results,
      });
    });
};

export const getSearchedMovies = (searchText) => async (dispatch) => {
  try {
    await axios
      .get(`${SEARCHEDMOVIES_API_1}=${searchText}&${SEARCHEDMOVIES_API_2}`)
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: types.GET_SEARCHEDMOVIES,
          payload: data.results,
        });
      });
  } catch (err) {
    console.log(err, "err");
    dispatch({
      type: types.ERROR_SEARCHEDMOVIES,
      payload: err,
    });
  }
};
