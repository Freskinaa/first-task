import React from "react";
import "./home.scss";
import { CardList } from "../../components/CardList/CardList";
import { data } from "../../assets/data/dummydata";

const HomePage = () => {
  return (
    <div className="page">
      <div className="container">
       
        <div className="hero-section">
          <h1>Welcome to Our Store!</h1>
          <p>Your one-stop destination for the latest electronics.</p>
        </div>
        
        <div className="home-cards">
          <CardList data={data} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
