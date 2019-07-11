import { useContext } from "react";
import Nav from "./Nav";
import AudioContext from "../components/AudioContext";

const Layout = ({ title, footer, children }) => {
  return (
    <div id="container">
      <Nav />

      {children}
      <hr />
      <h6>{footer}</h6>
      <style jsx>
        {`
          span {
            height: 60px;
            display: block;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
