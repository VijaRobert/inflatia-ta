// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import MainContent from "../components/layouts/main-content";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          id="tailwind-css"
          href="/assets/css/tailwind.css"
          type="text/css"
          media=""
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <MainContent>
          <Main />
        </MainContent>
        <NextScript />
      </body>
    </Html>
  );
}
