import { Button, Row } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { STORES, USERS } from "../../constants";
import { AuthContext } from "../../context/Auth";

import firebase from "../../firebase.config";

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const [link, setLink] = useState("");
  const handleSignOut = () => authCtx.logout();

  // useEffect(() => {
  //   console.log(firebase.auth().currentUser.uid)
  //   async () => {
  //     const userStore = await firebase
  //       .firestore()
  //       .collection(USERS)
  //       .doc(firebase.auth().currentUser.uid)
  //       .collection(STORES)
  //       .get();

  //     console.log(userStore.docs.map((doc) => doc.data()));
  //   };
  // }, []);

  return (
    <div>
      {/* <a href="" target="_blank">
        Go to your business site
      </a>
      <br /> */}
      {/* <a href="" target="_blank">
        Go to your admin business dashboard
      </a>{" "}
      <br />
      <br />
      <br /> */}
      <Button onPress={handleSignOut}>Sign out</Button>
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
