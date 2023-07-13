'use client';

import useSWR from 'swr'
import Link from 'next/link';
import styles from './posts.module.scss'
import { getAllPosts } from '@/services/getPost';
// import { usePosts } from '@/store';
// import {shallow} from 'zustand/shallow';
// import { useEffect } from 'react';



const Posts = () => {
  const {data: posts, isLoading} = useSWR("posts", getAllPosts);
  // const [posts, loading, getAllPosts] = usePosts(state => [state.posts, state.loading, state.getAllPosts],
  //   shallow 
  //   ); 

  //   useEffect(() => {
  //       getAllPosts();
  //   }, [getAllPosts]);
        
  return isLoading ? ( 
    <h3 className={styles.loading}>Loading ...</h3>
   ) : (
    <ul className={styles.listWrapper}>
    {posts.map((post:any) => (
        <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
    ))}
</ul>
  );
};

export default Posts;