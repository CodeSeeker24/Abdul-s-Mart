import React from "react";
import './style.css';
const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center" id="footer" >
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6" >
            <p className="mb-3 mb-md-0">Made by {" "}
              <a  href="https://www.linkedin.com/in/muhammad-abdul-basit-b60a90305/" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Abdul Basit</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
