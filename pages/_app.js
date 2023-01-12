import "../styles/globals.css";

//comp
import { Layout } from "../components";

//next
import { NextUIProvider } from "@nextui-org/react";

//hot toast
import { Toaster } from "react-hot-toast";

// context API
import { AuthContextProvider } from "../context/Auth";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <Toaster />
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </Layout>
    </NextUIProvider>
  );
}
