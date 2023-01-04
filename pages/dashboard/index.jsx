import { Button } from "@nextui-org/react";
import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const handleSignOut = () => {
    authCtx.logout();
  };
  return (
    <div>
      <Button onPress={handleSignOut}>Sign out</Button>
    </div>
  );
};

export default Dashboard;
