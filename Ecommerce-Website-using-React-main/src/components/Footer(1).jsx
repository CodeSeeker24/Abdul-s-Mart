import React from "react";
import './style.css';
const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center" id="footer" >
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6" >
            <p className="mb-3 mb-md-0 text-light">Made with ❤️ by {" "}
              <a  href="#" className="text-decoration-none text-light fs-5" target="_blank" rel="noreferrer">KUMAIL RAZA</a>
            </p>
           
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
