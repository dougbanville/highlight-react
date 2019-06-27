import Nav from "./Nav";

const Layout = ({ title, footer, children }) => (
  <div>
    <Nav />

    {children}
    <hr />
    <h6>{footer}</h6>
  </div>
);

export default Layout;
