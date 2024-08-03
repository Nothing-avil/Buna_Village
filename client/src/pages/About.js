import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.webp"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-4">
            Welcome to HexaShop, your one-stop destination for all your shopping
            needs! At HexaShop, we're dedicated to providing you with the best
            online shopping experience, offering a wide range of products,
            secure payment options, and excellent customer service. Our Mission
            Our mission at HexaShop is to make online shopping convenient,
            enjoyable, and secure for everyone. We strive to offer a diverse
            selection of high-quality products, from fashion and electronics to
            home goods and more, all at competitive prices. Wide Selection
            Secure Transactions Fast Shipping Excellent Customer Service: Join
            the HexaShop Community.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
