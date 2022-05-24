import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { BiLogIn } from "react-icons/bi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import { getSearchedMovies } from "../../actions/sliderActions";
import { connect } from "react-redux";

// import { AiOutlineClose } from "react-icons/ai";

function Navbar({ showSidebar, getSearchedMovies }) {
  const [movieList, setMovieList] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const text = useRef("");

  const search = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?apikey=7047c086&s=${searchMovie}&plot=full`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);

        if (!data.Search) {
          setMovieList({ movieList: [] });
          return;
        }
        const movieList = data.Search.map((movie) => movie.imdbID);
        setMovieList({ movieList });
      });
  };

  // const SEARCH_API =
  //   "https://api.themoviedb.org/3/search/movie?&api_key=e0936b38f3d577200421f706a99badd3&query=";

  const handleChange = (e) => {
    e.preventDefault();
    getSearchedMovies(text.current.value);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <ul className="nav-items">
          <Link to="#" className="menu-bars">
            <GoThreeBars className="bars-icon" onClick={showSidebar} />
          </Link>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/drenxtuen/image/upload/v1622841885/HAL/Brand%20Icon/Movie_mojo_5_oqswyu.svg"
              alt="moviemojo-logo"
            />
          </Link>
          <Link to="/login">
            <li>
              Login <BiLogIn className="icon-log" />
            </li>
          </Link>
          <Link to="/register">
            <li>
              <IoPersonCircleSharp className="icon-reg" /> Register
            </li>
          </Link>
          <li className="search-bar">
            <form onSubmit={search}>
              <input
                placeholder="Search Movie..."
                type="text"
                className="search"
                ref={text}
                onChange={handleChange}
              />
            </form>
            <BsSearch className="search-icon" onClick={search} />
          </li>
        </ul>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  showSidebar: PropTypes.instanceOf(null),
};

Navbar.propTypes = {
  showSidebar: PropTypes.func.isRequired,
};

export default connect(null, { getSearchedMovies })(Navbar);
