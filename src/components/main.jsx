import React from "react";
import './style.css';
const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Shop away everything</h5>
              <p className="card-text fs-5 d-none d-sm-block " >
              Discover the joy of shopping, where quality meets convenience and style knows no bounds
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
