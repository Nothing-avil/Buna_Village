import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOK] = useState(true);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const resp = await axios.get("api/v1/auth/customer-auth");
        if (resp.data.ok) {
          setOK(true);
        } else {
          setOK(false);
        }
      } catch (error) {
        if (error.resp && error.resp.status === 404) {
          setOK(false);
        } else {
          console.log(error);
        }
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}
