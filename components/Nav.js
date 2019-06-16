import Link from "next/link";

const Nav = () => (
  <div className="my-nav">
    <img src="/static/dougbanville.svg" />
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
);

export default Nav;
