import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/layouts/SideBar";
import MovieCard from "./components/layouts/MovieCard";
import SliderItem from "./components/layouts/SliderItem";
import Login from "./components/pages/login&reg/Login";
import Register from "./components/pages/login&reg/Register";
import Slider from "./components/MovieMojoSliders"; //Do Not Remove This
import NewsHome from "./components/pages/entertainment/News/NewsHome";
import Live from "./components/pages/entertainment/News/Live";
import Trending from "./components/pages/entertainment/News/Trending";
import Music from "./components/pages/entertainment/Music";
import TrendingMovies from "./components/pages/entertainment/Movies/TrendingMovies";
import PopularMovies from "./components/pages/entertainment/Movies/PopularMovies";
import { Provider } from "react-redux";
import store from "./store";
import Artists from "./components/pages/entertainment/Artists";
import Reviews from "./components/pages/entertainment/Reviews";

function App() {
  const [sidebar, setsidebar] = useState(false);
  const showSidebar = () => setsidebar(!sidebar);

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/movies" component={MovieCard} />
            <Route exact path="/movies/trending" component={TrendingMovies} />
            <Route exact path="/movies/popular" component={PopularMovies} />
            <Route exact path="/" component={SliderItem} />
            <Route exact path="/videos" component={SliderItem} />
            <Route exact path="/entertainment" component={SliderItem} />
            <Route exact path="/news" component={NewsHome} />
            <Route exact path="/news/trending" component={Trending} />
            <Route exact path="/news/live" component={Live} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/artists" component={Artists} />
            <Route exact path="/reviews" component={Reviews} />
          </Switch>
          <Navbar />
          <SideBar sidebar={sidebar} showSidebar={showSidebar} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
