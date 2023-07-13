import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Haein</title>
      </Head>
      <section className={styles.headingMd}>
        <p>[Haein Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>blog</h2>
        <ul className={styles.list}></ul>
      </section>
    </>
  );
}
