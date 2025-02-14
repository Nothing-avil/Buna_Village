import React from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import CustomersMenu from "../../components/Layout/CustomersMenu";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <CustomersMenu />
          </div>
          <div className="col-md-9">
            <div className="card-container">
              <div className="card">
                <h3>{auth?.customer?.name}</h3>
                <h3>{auth?.customer?.email}</h3>
                <h3>{auth?.customer?.address}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
