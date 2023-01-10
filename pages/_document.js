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
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/plus-jakarta-display.min.css" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
