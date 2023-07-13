'use client';

import Link from 'next/link';
import styles from './posts.module.scss'
import { usePosts } from '@/store';
import { useEffect } from 'react';
import {shallow} from 'zustand/shallow';


const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(state => [state.posts, state.loading, state.getAllPosts],
    shallow 
    ); 

    useEffect(() => {
        getAllPosts();
    }, [getAllPosts]);
        
  return loading ? ( 
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