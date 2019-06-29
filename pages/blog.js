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
import SmallPost from "../components/SmallPost";

//import Error from "./_error";

const Blog = ({ router, blog, posts }) => {
  const [value, setValue] = useState({
    text: "",
    audioId: "NOt set",
    audioPlaying: false
  });

  const { text, audioId, audioPlaying } = value;

  const [audioPlayer, setAudioPlayer] = useState("null");

  const [playerStatus, setPlayerStatus] = useState("player");

  let image = "no Image";
  if (blog.better_featured_image != null) {
    image = blog.better_featured_image.source_url;
  }

  return (
    <Layout title="Blogs" footer={`Copyright ${new Date().getFullYear()}`}>
      <Head>
        <title>{blog.title.rendered}</title>
        <meta property="og:locale" content="en_GB" key="locale" />
        <meta property="og:type" content="article" key="ogtype" />
        <meta property="og:title" content={blog.title.rendered} key="ogtitle" />
        <meta property="og:description" content={blog.title.rendered} key="ogdesc" />
        <meta property="og:url" content={`https://hacker-next.dougbanville.now.sh/blog/${blog.id}`} key="ogurl" />
        <meta property="og:site_name" content="RTÉ Radio 1 Highlights" key="ogsite" />
        <meta property="og:image" content={image} key="ogimage" />

        <meta name="twitter:card" content="summary_large_image" key="summary_large_image" />
        <meta name="twitter:description" content={blog.excerpt.rendered} key="twitterdesc" />
        <meta name="twitter:title" content={blog.title.rendered} key="twittertitle" />
        <meta name="twitter:image" content={image} key="twitterimage" />
      </Head>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="medium-8">
            <PostDetail post={blog} full="true" />
          </div>
          <div className="medium-4">
            {posts.map((p, i) => {
              if (p.id != blog.id) return <SmallPost post={p} key={i} />;
            })}
          </div>
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
  let posts;
  try {
    let url = `https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts/${context.query.id}`;
    let allPosts = `https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts/`;
    const response = await fetch(url);
    const postsResponse = await fetch(allPosts);
    posts = await postsResponse.json();
    data = await response.json();
  } catch (err) {
    console.log(err);
    data = [];
    posts = [];
  }
  return {
    blog: data,
    posts: posts.filter(r => {
      console.log(data);
      return r;
    })
  };
};

export default withRouter(Blog);
