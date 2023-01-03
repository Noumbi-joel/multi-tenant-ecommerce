import "../styles/globals.css";

//comp
import { Layout } from "../components";

//next UI
import { NextUIProvider } from "@nextui-org/react";

//hot toast
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}
