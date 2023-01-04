import "../styles/globals.css";

//comp
import { Layout } from "../components";

//next UI
import { NextUIProvider } from "@nextui-org/react";

// redux
import { Provider } from "react-redux";
import { store } from "../store";

//hot toast
import { Toaster } from "react-hot-toast";

// context API
import { AuthContextProvider } from "../context/Auth";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <Toaster />
        <Provider store={store}>
          <AuthContextProvider>
            <Component {...pageProps} />
          </AuthContextProvider>
        </Provider>
      </Layout>
    </NextUIProvider>
  );
}
