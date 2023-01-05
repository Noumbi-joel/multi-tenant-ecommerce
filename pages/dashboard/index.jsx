import { Button, Row } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth";

import firebase from "../../firebase.config";

const Dashboard = ({}) => {
  const authCtx = useContext(AuthContext);
  const [cookie, setCookie] = useState("");
  const router = useRouter();
  const handleSignOut = () => {
    authCtx.logout();
  };

  useEffect(() => {
    setCookie(Cookies.get("noBusiness"));
    console.log(JSON.stringify(firebase.auth().currentUser));
  }, []);

  if (cookie === "true") {
    return (
      <Row justify="center">
        No business has been created yet Please provide at least one business
        <div>
          <Button onPress={() => router.push("/businessInfo")}>
            Go to create a business
          </Button>
          OR
          <Button onPress={handleSignOut}>Sign out</Button>
        </div>
      </Row>
    );
  }

  return (
    <div>
      Hello Admin Dashboard <Button onPress={handleSignOut}>Sign out</Button>
    </div>
  );
};

export default Dashboard;

// export async function getStaticProps(context) {
//   const noBusiness = firebase
//     .firestore()
//     .collection(USERS)
//     .doc(firebase.auth().currentUser.uid)
//     .get()
//     .then((res) => res.data().noBusiness)
//     .catch((err) => toast.error("An errror occurred"));

//   console.log(noBusiness);

//   return {
//     props: {
//       noBusiness: noBusiness,
//     },
//   };
// }
