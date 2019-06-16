import Layout from "../components/Layout";

const Error = ({ message }) => {
  return (
    <Layout title="Error">
      <div>
        <p>{message}</p>
      </div>
    </Layout>
  );
};

export default Error;
