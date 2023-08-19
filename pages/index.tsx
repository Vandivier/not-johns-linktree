import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

import { Profile } from "../components/profile/Profile";
import { Socials } from "../components/socials/Socials";

import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>John Vandivier Social Home</title>
      <meta
        name="description"
        content="A collection of links related to John Vandivier."
      />
      <link
        rel="icon"
        href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/favicon.png`}
      />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>John Vandivier</h1>
      <p className={styles.description}>Educator. Engineer.</p>

      <Profile path={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/profile.jpeg`} />
      <Socials />

      <div className={styles.grid}>
        <a
          href="https://ladderly.io/"
          className={styles.card}
          rel="noreferrer"
          target="_blank"
        >
          <h2>Ladderly.io</h2>
          <p>
            Interested in learning to code or accelerating career advancement in
            tech? Check out Ladderly!
          </p>
        </a>

        <a
          href="https://join.robinhood.com/johnv-19a478e6"
          className={styles.card}
          rel="noreferrer"
          target="_blank"
        >
          <h2>Robinhood</h2>
          <p>Up to $200 in free stock!</p>
        </a>

        <a
          href="https://heybenny.com/refer/lQXG5B9"
          className={styles.card}
          rel="noreferrer"
          target="_blank"
        >
          <h2>Benny ESPP</h2>
          <p>Don{"'"}t miss out on this lucrative employee benefit!</p>
        </a>

        <a
          href="https://vandivier.github.io/not-johns-linktree/portfolio"
          className={styles.card}
          rel="noreferrer"
          target="_self"
        >
          <h2>Portfolio Highlights</h2>
          <p>My four favorite GitHub projects.</p>
        </a>

        <a
          href="https://www.afterecon.com/"
          className={styles.card}
          rel="noreferrer"
          target="_blank"
        >
          <h2>WordPress Blog</h2>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
      <p>Powered by Developers Like You!</p>
      <p style={{ marginTop: "0" }}>
        <Link
          href="https://github.com/Vandivier/not-johns-linktree"
          style={{ fontWeight: "bold" }}
          target="_blank"
        >
          Like this website? Check out the source code here!
        </Link>
      </p>
    </footer>
  </div>
);

export default HomePage;
