import type { NextPage } from "next";
import Head from "next/head";
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
      <link rel="icon" href="/not-johns-linktree/favicon.png" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>John Vandivier</h1>
      <p className={styles.description}>Educator. Engineer.</p>

      <Profile path="/profile.jpeg" />
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
          href="https://codinglife-store.myshopify.com/"
          className={styles.card}
          rel="noreferrer"
          target="_blank"
        >
          <h2>#CodingLife Store</h2>
          <p>
            Experience a brand dedicated to inspiring conversations around
            learning to code!
          </p>
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

    <footer className={styles.footer}>Powered by Developers Like You!</footer>
  </div>
);

export default HomePage;
