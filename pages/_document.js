import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
//next UI
import { CssBaseline } from "@nextui-org/react";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
          <link
            href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,400,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
