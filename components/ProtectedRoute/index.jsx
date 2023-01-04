import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [router, user]);

  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
