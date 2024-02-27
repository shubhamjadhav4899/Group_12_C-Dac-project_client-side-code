import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h6>About Us</h6>
            <p>
              C-DAC Hyderabad <b>Batch : September 2023</b>
            </p>
            <i>Group No-12</i>
            <p>
              Project Name : <b color="green">MEDEZEE Online Medical Store</b>
            </p>
            <h5>Guided By : Mr Shovan sir</h5>
            
          </div>
          <div className="col-md-4">
            <h5>Social Media</h5>
            <ul className="list-inline mt-3">
              <li className="list-inline-item">
                <a href="#" className="text-light">
                  <FaFacebookF />
                  <span className="ml-2">Facebook</span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light">
                  <FaTwitter />
                  <span className="ml-2">Twitter</span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light">
                  <FaInstagram />
                  <span className="ml-2">Instagram</span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light">
                  <FaLinkedinIn />
                  <span className="ml-2">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
            <p>
              230950320078 SHUBHAM RAMESHWAR MALANI
              <br />
              230950320079 SHUBHAM SUDHAKAR JADHAV
              <br />
              230950320080 SIDDHANT NITIN ROUNDALKAR
              <br />
              230950320081 SIDDHESH MURLIDHAR SHITOLE
              <br />
              230950320082 SIDDIQUI ADEEL ZAHUR AHMED
              <br />
              230950320083 SMRUTI SUBHASH DONGARE
            </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
