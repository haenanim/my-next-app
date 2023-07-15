import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { getSortedPostsData } from '@/lib/post';
import { GetStaticProps } from 'next';

// const inter = Inter({ subsets: ['latin'] });

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
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
        <ul className={styles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={styles.listItem} key={id}>
              <a>{title}</a>
              <br />
              <small className={styles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
