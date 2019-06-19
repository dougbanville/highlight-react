import Link from "next/link";

const Nav = () => (
  <div className="grid-x grid-margin-x">
    <div className="small-12 my-nav">
      {" "}
      <img src="/static/dougbanville.svg" />
    </div>
    <div className="small-12">
      <div className="my-nav">
        <ul className="menu">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
          </li>
        </ul>
        <style jsx>{`
          img {
            max-width: 300px;
            float: left;
            background-color: black;
          }
        `}</style>
      </div>
    </div>
  </div>
);

export default Nav;
