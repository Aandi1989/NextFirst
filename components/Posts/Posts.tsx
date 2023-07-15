'use client';

import useSWR from 'swr'
import Link from 'next/link';
import './posts.scss'
import { getAllPosts } from '@/services/getPost';



const Posts = () => {
  const {data: posts, isLoading} = useSWR("posts", getAllPosts);
        
  return isLoading ? ( 
    <h3 className="loading">Loading ...</h3>
   ) : (
    <ul className="listWrapper">
    {posts.map((post:any) => (
        <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
    ))}
</ul>
  );
};

export default Posts;