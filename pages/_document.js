import Document, { Html, Head, Main, NextScript } from "next/document";

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
          <link rel="stylesheet" href="/static/styles.css" />
        </head>

        <body>
          <div className="staticDiv" id="static">
            <audio id="audioPlayer" controls />
          </div>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
export default MyDocument;
