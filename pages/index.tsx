import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Socials } from "../components/Socials";

import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>John Vandivier Social Home</title>
      <meta
        name="description"
        content="A collection of links related to John Vandivier."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>John Vandivier</h1>
      <p className={styles.description}>Swag, socials, and contact links!</p>

      <Socials />

      <div className={styles.grid}>
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
          href="https://ladderly.io/"
          className={styles.card}
          rel="noreferrer"
          target="_blank"
        >
          <h2>Ladderly.io</h2>
          <p>
            Interested in learning to code or accelerating you career
            advancement in tech? Check out Ladderly!
          </p>
        </a>

        <Link href="/portfolio" passHref>
          <div className={styles.card}>
            <h2>Portfolio</h2>
            <p>Immerse yourself in my wonderous works of code.</p>
          </div>
        </Link>

        <a
          href="https://www.afterecon.com/"
          className={styles.card}
          rel="noreferrer"
          target="_blank"
        >
          <h2>Blog</h2>
          <p>Read my miscellaneous ramblings and learnings!</p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>Powered by Developers Like You!</footer>
  </div>
);

export default HomePage;
