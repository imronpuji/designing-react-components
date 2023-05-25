import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

        <script
          id="test123"
          dangerouslySetInnerHTML={{
            __html: `
            window.onloadCallback = function() {};
          `,
          }}
          async
        />

        <script
          src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
          async
          defer
        ></script>
      </body>
    </Html>
  )
}
