import Document, { Html, Head, Main, NextScript } from "next/document";
import AudioPlayer from "../components/AudioPlayer";

class MyDocument extends Document {
  render() {
    return (
      <html land="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="author" content="Doug Banville" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/css/foundation.min.css"
            integrity="sha256-xpOKVlYXzQ3P03j397+jWFZLMBXLES3IiryeClgU5og="
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            id="tp-open-sans-css"
            href="https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700%2C800&amp;ver=4.9.10"
            type="text/css"
            media="all"
          />
          <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
          <link
            rel="stylesheet"
            id="x-google-fonts-css"
            href="//fonts.googleapis.com/css?family=PT+Sans%3A400%2C400italic%2C700%2C700italic%7CMontserrat%3A400%7COswald%3A700%7COpen+Sans%3A400&#038;subset=latin%2Clatin-ext&#038;ver=4.6.1"
            type="text/css"
            media="all"
          />
          <link rel="stylesheet" href="/static/styles.css" />
          <script src="https://kit.fontawesome.com/e25e50b708.js" />
          <script src="https://cdn.jsdelivr.net/npm/openplayerjs@latest/dist/openplayer.min.js" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/openplayerjs@latest/dist/openplayer.min.css" />
        </head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
export default MyDocument;
