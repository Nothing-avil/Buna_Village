import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer">
      <h5 className="text-center mt-3 mb-4">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </h5>
      <h6 className="text-center mb-2">All Rights Reserved &copy; Ujjawal27</h6>
    </div>
  );
};

export default Footer;
