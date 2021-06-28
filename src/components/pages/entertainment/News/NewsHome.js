import React, { useState, useEffect, Fragment } from "react";
import "./News.scss";
import axios from "axios";

function NewsHome() {
  const [news, setNews] = useState([{}]);
  const [date, setDate] = useState(0);

  useEffect(() => {
    const currentDate = () => {
      setDate(new Date().toJSON().slice(0, 10));
      // moment(Date.now()).format('MM-DD-YYYY');
    };
    currentDate();
  }, []);

  const NEWS_API = `https://newsapi.org/v2/everything?q=Apple&from=${date}&sortBy=popularity&apiKey=63c7f82e5dc247f4bb0e62aca339392b`;

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
        {news.map((news, i) => {
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
            <div key={i} className="movie-card-container">
              <div className="image-container">
                <div
                  className="bg-image"
                  style={{ backgroundImage: `url(${urlToImage})` }}
                />
              </div>
              <div className="movie-info">
                <h2>{date}</h2>
                <span>by</span>
                <h3>{author}</h3>

                <div>
                  <h1>{title}</h1>
                  <small>News Time: {publishedAt}</small>
                </div>
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

export default NewsHome;
