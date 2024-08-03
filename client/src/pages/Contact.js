import React from "react";
import Layout from "./../components/Layout/Layout";
import { SlSocialInstagram, SlSocialGithub } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const Contact = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-5 ">
          <img
            src="/images/img-1.avif"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and information about product feel free to call anytime we
            24X7 vaialible
          </p>
          <p className="mt-3">
            <SlSocialInstagram /> :https://www.instagram.com/ujjawaltolia_2703
          </p>
          <p className="mt-3">
            <SlSocialGithub /> : https://github.com/Ujju-27
          </p>
          <p className="mt-3">
            <FaWhatsapp /> : https://wa.me/qr/2IVV5772LJS4H1
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
