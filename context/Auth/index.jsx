import { createContext, useEffect } from "react";
import toast from "react-hot-toast";

//firebase
import firebase from "../../firebase.config";

//constants
import { STORES, USERS } from "../../constants";

// functions
import { validateEmail } from "../../functions";

import { useRouter } from "next/router";
import { server } from "../../config";

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
              router.push("/businessInfo");
            } else {
              console.log("You already have a store");
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
              role: "admin",
            });
          res.user.sendEmailVerification({
            url: `${server}/signin`,
          });
          return "Verify the link sent to your email  | spam email";
        },
        error: (err) => err.message,
      }
    );
  };

  // sign in or sign up with google
  const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        if (res.additionalUserInfo.isNewUser) {
          firebase.firestore().collection(USERS).doc(res.user.uid).set({
            userId: res.user.uid,
            userName: res.user.displayName,
            userEmail: res.user.email,
            noBusiness: true,
            createAt: new Date().toISOString(),
            role: "admin",
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
                router.push("/businessInfo");
              } else {
               console.log("You already have a business")
              }
            });
        }
      })
      .catch((err) => toast.error(err.message));
  };

  // update your password
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

  // logout
  const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const saveBusiness = async ({ bName, bUrl, bCategory }) => {
    const uid = firebase.auth().currentUser.uid;
    firebase
      .firestore()
      .collection(USERS)
      .doc(uid)
      .get()
      .then((res) => {
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
              storeTenant: bUrl,
              storeFullLink: bUrl + ".myeduka.com",
              storeCategory: bCategory,
              storeSocialLinks: [],
              storeProducts: [],
              storeProductsCategories: [],
              storeOrders: [],
              storeCustomers: [],
              storeDesc: "",
              storeAddress: "",
              storeCity: "",
              storePostalCode: "",
              storeState: "",
              storeCountry: "",
              storeFavicon: "",
              storeBanner: "",
              storeLogo: "",
              storeBrand: "",
              storePayments: [],
              storeLegal: [],
              createdAt: new Date().toISOString(),
            });
          firebase
            .firestore()
            .collection(USERS)
            .doc(uid)
            .update({ noBusiness: false })
            .then(() =>
              toast.success("Store link: " + bUrl + ".localhost:3000")
            )
            .catch((err) => toast.error(err.message));
          return;
        } else {
          toast.error("You already have a store");
        }
      })
      .catch((e) => toast.error(e.message));
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
