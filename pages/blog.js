import Link from "next/link";
import { withRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";
//import Error from "./_error";

const Blog = ({ router, blog }) => {
  return (
    <Layout title="Blogs" footer={`Copyright ${new Date().getFullYear()}`}>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <h1>Title {blog.title.rendered}</h1>
        </div>
      </div>
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

Blog.getInitialProps = async context => {
  let data;
  try {
    let url = `https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts/${context.query.id}`;
    const response = await fetch(url);
    data = await response.json();
  } catch (err) {
    console.log(err);
    data = [];
  }
  return {
    blog: data
  };
};

export default withRouter(Blog);
