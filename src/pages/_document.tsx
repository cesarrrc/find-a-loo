import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta
          name="google-site-verification"
          content="dGgcHDV_aeDQv-M8FyRbO7cAqjuwhdEsKfOflz4Qc_A"
        /> */}
        <link rel="icon" href="/images/toilet.jpeg" />

        <meta name="description" content="Find a Loo near you!" />
        <meta name="keywords" content="austin, public restroom, restroom" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda&family=Cinzel&family=Mulish:wght@200;300;400;500&family=Philosopher&display=swap"
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
