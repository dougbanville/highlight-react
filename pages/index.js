import { useState, useContext, useEffect } from "react";
import { withRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";
import ReactHtmlParser from "react-html-parser";
import AudioButton from "../components/AudioButton";
import PostDetail from "../components/PostDetail";
import AudioContext from "../components/AudioContext";
import InitAudioContext from "../components/InitAudioContext";

const Index = ({ data }) => {
  const [value, setValue] = useState({
    text: "",
    audioId: "NOt set",
    audioPlaying: false
  });

  const { text, audioId, audioPlaying } = value;

  const { isPlaying, setIntialAudio } = useContext(AudioContext);

  const handleChange = name => e => {
    //setSearchQuery(e.target.value);
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
    Router.push(`/?searchTerm=${text}`);
  };

  const playFunction = e => {
    setValue({ ...value, [audioId]: e.target.value });
  };

  const [playerStatus, setPlayerStatus] = useState("player");

  useEffect(() => {
    if (!isPlaying) {
      console.log(`set source here?`);
    }
  }, []);
  return (
    <Layout title="Index" footer={`Copyright ${new Date().getFullYear()}`}>
      <Head>
        <title>Highlights</title>
      </Head>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="medium-12">{searchForm()}</div>
          <div className="medium-12" />
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {data.map((b, i) => (
            <div key={b.id} className="cell medium-6 small-12 article">
              <PostDetail post={b} />
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

Index.getInitialProps = async ({ query }) => {
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

export default withRouter(Index);
