import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";
import ReactHtmlParser from "react-html-parser";

const Index = () => {
  return (
    <Layout title="Home Page" footer={`Copyright ${new Date().getFullYear()}`}>
      <Head>
        <title>Doug </title>
      </Head>
      <h2>Hello World</h2>
      <Link href="/about">
        <a style={{ color: "red" }}>About</a>
      </Link>
      <p>Hello World</p>
      <style jsx>
        {`
          p {
            font-size: 18px;
            font-family: "Comic Sans";
            color: blue;
          }
        `}
      </style>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  let url = `https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts/`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(`got ${data.length} records`);
  return {
    data
  };
};

export default Index;
