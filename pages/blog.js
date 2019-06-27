import { useState } from "react";
import { withRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";
import ReactHtmlParser from "react-html-parser";
import AudioButton from "../components/AudioButton";
import PostDetail from "../components/PostDetail";

//import Error from "./_error";

const Blog = ({ router, blog }) => {
  const [value, setValue] = useState({
    text: "",
    audioId: "NOt set",
    audioPlaying: false
  });

  const { text, audioId, audioPlaying } = value;

  const [audioPlayer, setAudioPlayer] = useState("null");

  const [playerStatus, setPlayerStatus] = useState("player");

  return (
    <Layout title="Blogs" footer={`Copyright ${new Date().getFullYear()}`}>
      <Head>
        <title>{ReactHtmlParser(blog.title.rendered)}</title>
      </Head>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="medium-8">
            <PostDetail post={blog} full="true" />
          </div>
          <div className="medium-4">Related</div>
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
