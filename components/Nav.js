import React, { Component } from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="my-nav-container">
      <div className="grid-container my-nav">
        <div className="grid-x grid-margin-x">
          <div className="cell small-6 ">
            <Link href="/">
              <img src="https://radio.rte.ie/radio1highlights/wp-content/uploads/sites/3/2016/08/Radio1_landscape-1.png" />
            </Link>
          </div>
          <div className="cell small-6">
            <div className="my-nav">
              <ul className="menu">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        img {
          cursor: pointer;
        }
        .my-nav {
          background: rgb(85, 156, 206);
        }
        .my-nav-container {
          margin-top: 60px;
        }
        img {
          max-width: 200px;
        }
      `}</style>
    </div>
  );
};

export default Nav;
