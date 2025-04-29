import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/static/vendors/themify-icons/css/themify-icons.css" />
        <link rel="stylesheet" href="/static/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/static/vendors/themify-icons/js/themify-icons.js"></script>
      </body>
    </Html>
  );
}