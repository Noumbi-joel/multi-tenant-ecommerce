import "../styles/globals.css";

//comp
import { Layout } from "../components";

//next
import { NextUIProvider } from "@nextui-org/react";

//hot toast
import { Toaster } from "react-hot-toast";

// context API
import { AuthContextProvider } from "../context/Auth";

// redux
import { store } from "../store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <Layout>
          <Toaster />
          <AuthContextProvider>
            <Component {...pageProps} />
          </AuthContextProvider>
        </Layout>
      </NextUIProvider>
    </Provider>
  );
}
