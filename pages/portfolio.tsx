import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const PortfolioPage: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>John Vandivier Portfolio</title>
      <meta
        name="description"
        content="A portfolio of software developer work."
      />
      <link rel="icon" href="/not-johns-linktree/favicon.png" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>John Vandivier</h1>
      <p className={styles.description}>A Portfolio</p>
      <a
        href="https://vandivier.github.io/not-johns-linktree/"
        style={{
          fontSize: "1.25rem",
          textDecoration: "underline",
        }}
      >
        Contact Information and Social Media
      </a>

      <div className={styles.grid}>
        <a
          href="https://github.com/Vandivier"
          className={styles.card}
          rel="noreferrer"
          target="_blank"
        >
          <h2>GitHub</h2>
          <p>Experience my passion for Open Source!</p>
        </a>

        <a
          href="https://github.com/Vandivier/not-johns-linktree/"
          className={styles.card}
          rel="noreferrer"
          target="_blank"
        >
          <h2>Social Home Template</h2>
          <p>
            Steal this site! Build a social home, portfolio, or other site with
            this open source template!
          </p>
        </a>

        <a
          href="https://vandivier.github.io/ladderly-slides/"
          className={styles.card}
          rel="noreferrer"
          target="_blank"
        >
          <h2>Ladderly Slides</h2>
          <p>
            #LearnToCode! An open source programming curriculum, inclusive of
            job search prep.
          </p>
        </a>

        <a
          href="https://vandivier.github.io/vanilla-flat-white/"
          className={styles.card}
          rel="noreferrer"
          target="_blank"
        >
          <h2>Vanilla Flat White</h2>
          <p>
            An assortment of microprojects in HTML, CSS, and Vanilla JavaScript.
          </p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>Powered by Developers Like You!</footer>
  </div>
);

export default PortfolioPage;
