import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

//firebase
import firebase from "../../firebase.config";

//constants
import { STORES, USERS } from "../../constants";

// functions
import { validateEmail } from "../../functions";

// cookies
import Cookies from "js-cookie";

import { useRouter } from "next/router";
import axios from "axios";

export const AuthContext = createContext({
  signin: async () => {},
  signup: async () => {},
  googleLogin: async () => {},
  updatePassword: () => {},
  saveBusiness: async () => {},
  logout: async () => {},
});

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
      Cookies.set("user", "connected", { expires: 1 });
    });
  }, []);

  // sign in method for old user
  const signin = async (email, password) => {
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    toast.promise(firebase.auth().signInWithEmailAndPassword(email, password), {
      loading: "Signing you in...",
      success: (res) => {
        if (!res.user.emailVerified) {
          return "Please verify your email before signing in";
        }
        firebase
          .firestore()
          .collection(USERS)
          .doc(res.user.uid)
          .get()
          .then((res) => {
            if (res.data()?.noBusiness) {
              Cookies.set("noBusiness", true, { expires: 365 });
              router.push("/businessInfo");
            } else {
              Cookies.set("noBusiness", false, { expires: 365 });
              router.push("/dashboard");
            }
          });
      },
      error: (err) => err.message,
    });
  };

  // sign up for new user
  const signup = async ({ email, password, fName, lName }) => {
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    if (fName.length <= 1 || lName.length <= 1) {
      return toast.error(
        "Please enter at least 2 characters for first name and last name"
      );
    }

    toast.promise(
      firebase.auth().createUserWithEmailAndPassword(email, password),
      {
        loading: "Creating your account...",
        success: (res) => {
          Cookies.set("noBusiness", true, { expires: 365 });
          firebase
            .firestore()
            .collection(USERS)
            .doc(res.user.uid)
            .set({
              userId: res.user.uid,
              userName: fName + " " + lName,
              userEmail: res.user.email,
              noBusiness: true,
              createAt: new Date().toISOString(),
            });
          res.user.sendEmailVerification({
            url: "http://localhost:3000/signin",
          });
          return "Verify the link sent to your email  | spam email";
        },
        error: (err) => err.message,
      }
    );
  };

  const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        if (res.additionalUserInfo.isNewUser) {
          console.log("new user");
          Cookies.set("noBusiness", true, { expires: 365 });
          firebase.firestore().collection(USERS).doc(res.user.uid).set({
            userId: res.user.uid,
            userName: res.user.displayName,
            userEmail: res.user.email,
            noBusiness: true,
            createAt: new Date().toISOString(),
          });
          router.push("/businessInfo");
        }
        if (!res.additionalUserInfo.isNewUser) {
          firebase
            .firestore()
            .collection(USERS)
            .doc(res.user.uid)
            .get()
            .then((res) => {
              if (res.data()?.noBusiness) {
                Cookies.set("noBusiness", true, { expires: 365 });
                router.push("/businessInfo");
              } else {
                Cookies.set("noBusiness", false, { expires: 365 });
                router.push("/dashboard");
              }
            });
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const updatePassword = (closeModal, email) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        closeModal();
        toast.success("Please go and check your email or spam");
      })
      .catch((err) => {
        closeModal();
        toast.error(err.message);
      });
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      router.push("/signin");
      Cookies.remove("user");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const saveBusiness = async ({ bName, bUrl, bCategory }) => {
    const uid = firebase.auth().currentUser.uid;
    Cookies.set("storeCredentials", bName + "/" + bUrl + "/" + bCategory, { expires: 365 });
    if (
      Cookies.get("noBusiness") === undefined ||
      Cookies.get("noBusiness") === null
    ) {
      console.log("no cookie found looking in the db");
      firebase
        .firestore()
        .collection(USERS)
        .doc(uid)
        .get()
        .then((res) => {
          Cookies.set("noBusiness", false, { expires: 365 });
          if (res.data()?.noBusiness) {
            firebase
              .firestore()
              .collection(USERS)
              .doc(uid)
              .collection(STORES)
              .doc(bName)
              .set({
                storeId: uid + "/" + bName,
                storeName: bName,
                storeLink: bUrl,
                storeCategory: bCategory,
                createdAt: new Date().toISOString(),
              });
            firebase
              .firestore()
              .collection(USERS)
              .doc(uid)
              .update({ noBusiness: false })
              .then(() => router.push("/dashboard"))
              .catch((err) => toast.error(err.message));
            return;
          } else {
            return toast.error(
              "You can just manage one business for the moment"
            );
          }
        })
        .catch((e) => toast.error(e.message));
    }

    if (Cookies.get("noBusiness") === "true") {
      console.log("no business yet");
      Cookies.set("noBusiness", false, { expires: 365 });
      firebase
        .firestore()
        .collection(USERS)
        .doc(uid)
        .collection(STORES)
        .doc(bName)
        .set({
          storeId: uid + "/" + bName,
          storeName: bName,
          storeLink: bUrl,
          storeCategory: bCategory,
          createdAt: new Date().toISOString(),
        });
      firebase
        .firestore()
        .collection(USERS)
        .doc(uid)
        .update({ noBusiness: false })
        .then(() => router.push("/dashboard"))
        .catch((err) => toast.error(err.message));
      return;
    }
    if (Cookies.get("noBusiness") === "false") {
      console.log("already have a business");
      return toast.error("You can just manage one business for the moment");
    }
  };

  const value = {
    updatePassword: updatePassword,
    signin: signin,
    signup: signup,
    saveBusiness: saveBusiness,
    googleLogin: googleLogin,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
