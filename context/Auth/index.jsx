import { createContext, useState } from "react";
import toast from "react-hot-toast";

//firebase
import firebase from "../../firebase.config";
// functions
import { validateEmail } from "../../functions";

// cookies
import Cookies from "universal-cookie";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  signin: () => {},
  signup: (userInfos) => {},
  logout: () => {},
});

const actionCodeSettings = {
  url: "https://dev-mokolo.onrender.com/signup",
  handleCodeInApp: true,
  iOS: {
    bundleId: "com.mokolo.ios",
  },
  android: {
    packageName: "com.mokolo.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "https://dev-mokolo.onrender.com",
};

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();

  const cookies = new Cookies();

  const authenticate = (token) => {};

  const signin = async (email, password) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signup = async ({ email, password, fName, lName, setVisible }) => {
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    if (fName.length <= 1 || lName.length <= 1) {
      return toast.error(
        "Please enter at least 2 characters for first name and last name"
      );
    }
    // setVisible(true);
    toast.promise(
      firebase.auth().createUserWithEmailAndPassword(email, password),
      {
        loading: "Creating your account...",
        success: (res) => {
          cookies.set("user", res.user.email, {
            path: "/",
            maxAge: 3600,
          });

          firebase
            .auth()
            .sendSignInLinkToEmail(res.user.email, actionCodeSettings)
            .then(() => {
              setVisible(true);
            })
            .catch((err) => err.message);
        },
        error: (err) => err.message,
      }
    );
  };

  const logout = async () => {};

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    signin: signin,
    signup: signup,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
