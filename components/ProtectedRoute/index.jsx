import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

import firebase from "../../firebase.config";

import Cookies from "universal-cookie";
import { AuthContext } from "../../context/Auth";
import { USERS } from "../../constants";

const ProtectedRoute = ({ children }) => {
  const cookies = new Cookies();
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (cookies.get("user")) {
      if (localStorage.getItem("noBusiness") === "true") {
        router.push("/businessInfo");
      }
      if (localStorage.getItem("noBusiness") === "false") {
        router.push("/dashboard");
      }
      if (!localStorage.getItem("noBusiness")) {
        router.push("/signin");
      }
    }
    if (!cookies.get("user")) {
      router.push("/signin");
    }
  }, [router, user]);

  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
