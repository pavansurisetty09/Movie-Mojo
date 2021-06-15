import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import SliderCom from "./SliderCom";
import { Link } from "react-router-dom";
import {
  getSliderMovies,
  getSliderMovies1,
  getSliderMovies2,
  getSliderMovies3,
  getSliderMovies4,
} from "../../actions/sliderActions";

function SliderItem({
  sliderMovies: { movies, movies1, movies2, movies3, movies4 },
  getSliderMovies,
  getSliderMovies1,
  getSliderMovies2,
  getSliderMovies3,
  getSliderMovies4,
}) {
  useEffect(() => {
    getSliderMovies();
    getSliderMovies1();
    getSliderMovies2();
    getSliderMovies3();
    getSliderMovies4();
  }, []);

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

      <Link to="#">
        <h1 className="slider-headers">Action Thrillers</h1>
        <SliderCom className="container-4" movies={movies3} />
      </Link>

      <Link to="#">
        <h1 className="slider-headers">Movie Mojo Exclusive</h1>
        <SliderCom className="container-5" movies={movies4} />
      </Link>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  sliderMovies: state.slider,
});

export default connect(mapStateToProps, {
  getSliderMovies,
  getSliderMovies1,
  getSliderMovies2,
  getSliderMovies3,
  getSliderMovies4,
})(SliderItem);
