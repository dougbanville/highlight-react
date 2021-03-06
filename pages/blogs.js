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

const Blogs = ({ data }) => {
  const [value, setValue] = useState({
    text: "",
    audioId: "NOt set",
    audioPlaying: false
  });

  const { text, audioId, audioPlaying } = value;

  const handleChange = name => e => {
    //setSearchQuery(e.target.value);
    console.log("cha" + e.target.value);
    setValue({ ...value, [name]: e.target.value });
  };
  const [searchQuery, setSearchQuery] = useState("tubridy");

  const [audioPlayer, setAudioPlayer] = useState("null");

  const searchForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange("text")} placeholder="search" />
    </form>
  );

  const playButton = () => {
    <button className="playButton" onClick={handleChange("audioId")} value={audioId}>
      Play IT!
    </button>;
  };

  const handleSubmit = e => {
    e.preventDefault();
    Router.push(`/blogs/?searchTerm=${text}`);
  };

  const playFunction = e => {
    setValue({ ...value, [audioId]: e.target.value });
  };

  const [playerStatus, setPlayerStatus] = useState("player");

  return (
    <Layout title="Blogs" footer={`Copyright ${new Date().getFullYear()}`}>
      <Head>
        <title>Blogs {audioPlaying}</title>
      </Head>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="medium-12">{searchForm()}</div>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {data.map((b, i) => (
            <div key={b.id} className="cell medium-6 small-12 article">
              <PostDetail post={b} />
              <div>
                <Link as={`/blog/${b.id}`} href={`/blog/?id=${b.id}`}>
                  test
                </Link>
              </div>
            </div>
          ))}
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

Blogs.getInitialProps = async ({ query }) => {
  let url = `https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts/`;
  if (query.searchTerm) {
    url = `https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts?search=${query.searchTerm}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return {
    data
  };
};

export default withRouter(Blogs);
