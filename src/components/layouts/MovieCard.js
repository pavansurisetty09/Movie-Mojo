import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import "./MovieCard.scss";
import * as AiIcons from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroll-component";
import App from "../../App";
import PropTypes from "prop-types";
import {
  getMovies,
  setHasMore,
  setSkip,
  fetchMoreMovies,
  getTotal,
} from "../../actions/movieCardActions";

function MovieCard({
  movie: { movies, total, hasMore, skip },
  getMovies,
  getTotal,
  setHasMore,
  setSkip,
  fetchMoreMovies,
}) {
  // const [movies, setMovies] = useState([]);
  // const [skip, setSkip] = useState(1);
  // const [hasMore, setHasMore] = useState(true);
  // const [total, setTotal] = useState(0);

  useEffect(() => {
    getMovies();
    getTotal();
  }, []);

  const loader = (
    <div>
      <img
        className="spinner"
        src="https://res.cloudinary.com/drenxtuen/image/upload/v1623273805/HAL/spinners/Spinner-1s-124px_a825qt.svg"
        alt="loading..."
      />
    </div>
  );

  // const fetchMoreMovies = async () => {
  //   await axios
  //     .get(`/movies?skip=${skip}&limit=16`)
  //     .then((res) => res.data)
  //     .then((data) => {
  //       movies(movies.slice().concat(data.movies));
  //     });
  // };

  const loadMore = () => {
    if (movies.length >= total) {
      setHasMore();
    } else {
      setTimeout(() => {
        fetchMoreMovies(skip);
        setSkip();
      }, 1000);
    }
  };

  const endMessage = (
    <Fragment>
      <div className="end-message">
        <span className="want-more">Want To see </span>
      </div>

      <div className="end-buttons">
        <div>
          <Link to="/videos" className="videos" type="button">
            <span className="btn-1">Videos</span>
          </Link>
        </div>
        <div>
          <Link to="/entertainment" type="button">
            <span className="btn">Entertainment</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={loadMore}
      hasMore={hasMore}
      loader={loader}
      scrollThreshold="100px"
      endMessage={endMessage}
    >
      <div className="container">
        <div className="flex">
          {movies.map((movie, i) => {
            const { title, image, genre, released, rating, artists } = movie;
            <App key={movie.id} movie={movie} />;
            return (
              <div className="card" key={i}>
                <div className="imgBx">
                  <img src={image} alt={title} width="300px" height="450px" />
                </div>
                <div className="contentBx">
                  <div className="flex1">
                    <h4 className="glow">{title}</h4>
                    <span className="glow rel">{released}</span>
                  </div>
                  <div className="size">
                    <span className="glow rel">{genre}</span>
                  </div>
                  <hr className="content-styling" />
                  <div className="color">
                    <div className="glow">
                      <span>
                        <strong>Director: </strong>
                      </span>
                      {artists.map((artist) => artist.name).join(", ")}
                    </div>
                    <div className="glow rel">
                      <span>
                        <strong>Rating: </strong>
                      </span>
                      {rating}
                      <AiIcons.AiFillStar
                        style={{
                          color: "yellow",
                          marginLeft: "5px",
                        }}
                      />
                    </div>
                    <div className="container2">
                      <div type="button" className="button2">
                        Show More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movieCard,
});

export default connect(mapStateToProps, {
  getMovies,
  getTotal,
  setHasMore,
  setSkip,
  fetchMoreMovies,
})(MovieCard);
