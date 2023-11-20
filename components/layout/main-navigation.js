import React from "react";
import Link from "next/link";
import Logo from "./logo";
import classes from './main-navigation.module.css'

function MainNavigation() {
  return (
    <section className={classes.header}>
      <Link href={"/"} legacyBehavior>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={"/posts"}>Posts</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MainNavigation;
