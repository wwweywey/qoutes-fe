import React from "react";
import Button from "../../components/Button";

import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="welcomeQuote">
        <h1>
          Random Quotes that can inspire you.
          <br />
          Maybe, Maybe not. I’m not sure
        </h1>
        <p>
          Collection of random quotes that may or may not be or not at all
          inspire you.
        </p>

        {/* <div className="home-img"></div> */}
      </div>

      {/* <img className="homeImage" src={homeImage} alt="" /> */}
      <div className="action-div">
        <Link to="/categories">
          <Button text="Browse by category" />
        </Link>
        <Link to="/qoutes">
          <Button text="View all" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
