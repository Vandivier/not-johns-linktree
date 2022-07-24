import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="A portfolio of software developer work."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>John Vandivier</h1>
        <p className={styles.description}>A Portfolio</p>

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
            href="https://www.linkedin.com/in/john-vandivier"
            className={styles.card}
            rel="noreferrer"
            target="_blank"
          >
            <h2>LinkedIn</h2>
            <p>Connect with me professionally and learn about my background.</p>
          </a>

          <a
            href="https://www.afterecon.com/"
            className={styles.card}
            rel="noreferrer"
            target="_blank"
          >
            <h2>Blog</h2>
            <p>Read my miscellaneous ramblings and learnings!</p>
          </a>

          <a
            href="https://vandivier.github.io/ladderly-slides/"
            className={styles.card}
            rel="noreferrer"
            target="_blank"
          >
            <h2>Ladderly Slides</h2>
            <p>
              #LearnToCode! An open source software development curriculum,
              inclusive of job search prep.
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
              An assortment of microprojects in HTML, CSS, and Vanilla
              JavaScript.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>Powered by Developers Like You!</footer>
    </div>
  );
};

export default Home;
