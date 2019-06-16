import Nav from "./Nav";

const Layout = ({ title, footer, children }) => (
  <div>
    <Nav />
    <h1>{title}</h1>
    {children}
    <hr />
    <h6>{footer}</h6>
  </div>
);

export default Layout;
