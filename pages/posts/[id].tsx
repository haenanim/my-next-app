import { getAllPostIds, getPostData, getSortedPostsData } from '@/lib/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Styles from '../../styles/Post.module.css';
import Head from 'next/head';

const Post = ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) => {
  return (
    <div className={Styles.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={Styles.headingXl}>{postData.title}</h1>
        <div>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
};

export default Post;
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
