import React, { Component } from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="grid-container my-nav">
      <div className="grid-x grid-margin-x">
        <div className="cell small-6 ">
          <img src="https://radio.rte.ie/radio1highlights/wp-content/uploads/sites/3/2016/08/Radio1_landscape-1.png" />
        </div>
        <div className="cell small-6">
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
          </div>
        </div>
      </div>
      <style jsx>{`
        .my-nav {
          background: rgb(85, 156, 206);
        }
        img {
          max-width: 200px;
        }
      `}</style>
    </div>
  );
};

export default Nav;
