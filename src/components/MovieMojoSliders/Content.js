import React from "react";
import IconCross from "./../Icons/IconCross";
import "./Content.scss";

const POSTER_API = "https://image.tmdb.org/t/p/w1280";

const Content = ({ movie, onClose }) => (
  <div className="content" id="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{
          backgroundImage: `url(${POSTER_API + movie.backdrop_path})`,
        }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.title}</div>
        <div className="content__description">{movie.overview}</div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;
