import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const About = () => (
  <Layout title="About Page" footer={`Copyright ${new Date().getFullYear()}`}>
    <p>Content Here</p>
  </Layout>
);

export default About;
