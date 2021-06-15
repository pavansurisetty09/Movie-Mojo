import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import "./News.scss";
import axios from "axios";
import { getNews } from "../../../../actions/newsActions";

function Live({ news, getNews }) {
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="wrap">
      <div className="box">
        {news.news.map((news) => {
          const { author, content, publishedAt, title, url, urlToImage } = news;

          return (
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow:
                  "0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -7px rgb(0 0 0 / 20%)",
                overflow: "hidden",
                minHheight: "361px",
                marginBottom: "100px",
              }}
            >
              <div
                style={{
                  webkitClipPath: "circle(90% at 30px 30px)",
                  clipPath: "circle(50% at 50% 50%)",
                  flex: "4",
                }}
              >
                <div
                  className="bg-image"
                  style={{ backgroundImage: `url(${urlToImage})` }}
                />
              </div>
              <div className="movie-info">
                <h2>News Details</h2>
                <span>by</span>
                <h3>{author}</h3>

                <div>
                  <h1>{title}</h1>
                  <small>News Time: {publishedAt}</small>
                </div>
                {/* <h4>Rating: {rating} / 10</h4> */}
                <p>{content}</p>
                <div className="tags-container">
                  <a href={url} target="_blank">
                    {<span>{"Watch News"}</span>}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  news: state.newsCards,
});

export default connect(mapStateToProps, { getNews })(Live);
