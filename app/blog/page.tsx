"use client";

import {shallow} from 'zustand/shallow';
import { Metadata } from 'next';
import styles from './page.module.scss';
import { useEffect } from 'react';
import { getAllPosts } from '@/services/getPost';
import Posts from '@/components/Posts/Posts';
import PostSearch from '@/components/PostSearch/PostSearch';
import { usePosts } from '@/store';



export const metadata: Metadata = {
    title: 'Blog | Next App',
}

export default async function Blog() {
   const [posts, loading, getAllPosts] = usePosts(state => [state.posts, state.loading, state.getAllPosts],
    shallow 
    ); 

    useEffect(() => {
        getAllPosts();
    }, [getAllPosts]);
        
    return (
        <>
            {loading ? <h3>Loading...  </h3> : 
            <> 
            <div>Blog page</div>
            <PostSearch />
            <Posts posts={posts}/>
            </>
            }
        </>
    )

}