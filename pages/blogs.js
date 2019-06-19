import { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";
import ReactHtmlParser from "react-html-parser";

const Blogs = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("tubridy");
  const searchForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={handleTextChange} />
    </form>
  );

  const handleTextChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    Router.push(`/blogs/?searchTerm=${searchQuery}`);
  };

  return (
    <Layout title="Blogs" footer={`Copyright ${new Date().getFullYear()}`}>
      <Head>
        <title>Blogs</title>
      </Head>
      {searchForm()}
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {data.map((b, i) => (
            <div key={b.id} className="cell medium-6 article">
              <img src={b.better_featured_image.source_url} />
              <div className="entry-wrap">
                <Link as={`/blog/${b.id}`} href={`/blog/?id=${b.id}`}>
                  <h4>
                    <span className="subheader">{ReactHtmlParser(b.acf.sub_heading)}</span> /{" "}
                    {ReactHtmlParser(b.title.rendered)}
                  </h4>
                </Link>
              </div>
              <button
                onClick={() => {
                  let audioPLayer = document.getElementById("audioPlayer");
                  audioPLayer.setAttribute("src", b.rte_mp3_audio);
                  audioPLayer.play();
                }}
              >
                Play
              </button>
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
  console.log(`${query.searchTerm}`);
  let url = `https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts/`;
  if (query.searchTerm) {
    url = `https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts?search=${query.searchTerm}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  console.log(`got ${data.length} records`);
  console.log(data);
  return {
    data
  };
};

export default Blogs;
