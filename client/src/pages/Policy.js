import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacypolicy.webp"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <p>
            Information Collection: HexaShop collects personal information (such
            as name, email, address) from users when they register on the
            website, place an order.
          </p>
          <p>
            Information Use: The collected information may be used to
            personalize the user experience, improve customer service, and
            process transactions.
          </p>
          <p>
            Data Protection: HexaShop takes reasonable measures to protect user
            information. This includes implementing security measures to prevent
            unauthorized access.
          </p>
          <p>
            Information Disclosure: HexaShop does not sell, trade, or otherwise
            transfer users' personal information to third parties without their
            consent, except as required by law or to fulfill orders.
          </p>
          <p>
            Cookies and Tracking: HexaShop uses cookies and similar technologies
            to track user interactions with the website, analyze trends, and
            improve the website's functionality.
          </p>
          <p>
            Policy Changes: HexaShop reserves the right to update and change the
            privacy policy. Users will be notified of any changes through the
            website. By using the website, users agree to the privacy policy and
            any updates.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
