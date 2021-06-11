import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import SliderCom from "./SliderCom";
import { Link } from "react-router-dom";

function SliderItem() {
  const [movies, setMovies] = useState([{}]);
  const [movies1, setMovies1] = useState([{}]);
  const [movies2, setMovies2] = useState([{}]);

  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?/sort_by=popularity.desc&api_key=e0936b38f3d577200421f706a99badd3&page=1`;
  const FEATURED_API1 = `https://api.themoviedb.org/3/discover/movie?/sort_by=popularity.desc&api_key=e0936b38f3d577200421f706a99badd3&page=9`;
  const FEATURED_API2 = `https://api.themoviedb.org/3/discover/movie?/sort_by=popularity.desc&api_key=e0936b38f3d577200421f706a99badd3&page=3`;

  useEffect(() => {
    const getData = () =>
      axios(FEATURED_API)
        .then((res) => res.data)
        .then((data) => {
          setMovies(data.results);
        });
    getData();
  }, [FEATURED_API]);

  useEffect(() => {
    axios(FEATURED_API1)
      .then((res) => res.data)
      .then((data) => {
        setMovies1(data.results);
      });
  }, [FEATURED_API1]);

  useEffect(() => {
    axios(FEATURED_API2)
      .then((res) => res.data)
      .then((data) => {
        setMovies2(data.results);
      });
  }, [FEATURED_API2]);

  return (
    <Fragment>
      <Link to="#">
        <h1 className="slider-headers">Latest Movies in Movie Mojo</h1>
      </Link>
      <SliderCom movies={movies} />
      <Link to="#">
        <h1 className="slider-headers">Popular Movies</h1>
      </Link>
      <SliderCom className="container-2" movies={movies1} />
      <Link to="#">
        <h1 className="slider-headers">Top Viewed Movies</h1>
      </Link>
      <SliderCom className="container-3" movies={movies2} />
    </Fragment>
  );
}

export default SliderItem;
