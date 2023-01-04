import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

//firebase
import firebase from "../../firebase.config";

//constants
import { USERS } from "../../constants";

// functions
import { validateEmail } from "../../functions";

// cookies
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

export const AuthContext = createContext({
  user: null,
  authenticate: (token) => {},
  signin: (userInfos) => {},
  signup: (userInfos) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const router = useRouter();
  const cookies = new Cookies();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        return setUser(null);
      }
      cookies.set("user", user.email, {
        path: "/",
      });
      setUser(user.uid);
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
        router.push("/");
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
          localStorage.setItem("noBusiness", "true");
          firebase.firestore().collection(USERS).doc(res.user.uid).set({
            userId: res.user.uid,
            userFName: fName,
            userLName: lName,
            noBusiness: true,
          });
          res.user.sendEmailVerification({
            url: "http://localhost:3000/businessInfo",
          });
          return "Verify the link sent to your email account | Please check the spam otherwise";
        },
        error: (err) => err.message,
      }
    );
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      router.push("/signin");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const authenticate = (token) => {};

  const value = {
    user: user,
    authenticate: authenticate,
    signin: signin,
    signup: signup,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
