import "../styles/globals.css";

//comp
import { Layout, ProtectedRoute } from "../components";

//next
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";

//hot toast
import { Toaster } from "react-hot-toast";

// context API
import { AuthContextProvider } from "../context/Auth";

export default function App({ Component, pageProps }) {
  // no auth required for this routes
  const noAuthRequired = ["/signin", "/signup"];

  const router = useRouter();

  return (
    <NextUIProvider>
      <Layout>
        <Toaster />
        <AuthContextProvider>
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </AuthContextProvider>
      </Layout>
    </NextUIProvider>
  );
}
