import React, { useState, useEffect, Fragment } from "react";
// import "./News.scss";
import axios from "axios";

function Music() {
  const [news, setNews] = useState([{}]);

  const NEWS_API =
    "https://newsapi.org/v2/everything?q=music&from=2021-06-11&sortBy=popularity&apiKey=63c7f82e5dc247f4bb0e62aca339392b";

  useEffect(() => {
    function getNews() {
      axios
        .get(NEWS_API)
        .then((res) => res.data)
        .then((data) => {
          setNews(data.articles);
        });
    }
    getNews();
  }, []);

  return (
    <div className="wrap">
      <div className="box">
        {news.map((news) => {
          const {
            author,
            content,
            description,
            publishedAt,
            title,
            url,
            urlToImage,
          } = news;

          return (
            <div className="movie-card-container">
              <div className="image-container">
                <div
                  className="bg-image"
                  style={{ backgroundImage: `url(${urlToImage})` }}
                />
              </div>
              <div className="movie-info">
                <h2>Music Details</h2>
                <span>by</span>
                <h3>{author}</h3>

                <div>
                  <h1>{title}</h1>
                  <small>Music Time: {publishedAt}</small>
                </div>
                {/* <h4>Rating: {rating} / 10</h4> */}
                <p>{content}</p>
                <div className="tags-container">
                  <a href={url} target="_blank">
                    {<span>{"Listen Music"}</span>}
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
export default Music;
