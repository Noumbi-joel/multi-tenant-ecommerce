import React from "react";

//next comp
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Mokolo | Web</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
