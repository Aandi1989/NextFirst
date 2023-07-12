"use client";
import { Metadata } from 'next';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { getAllPosts } from '@/services/getPost';
import Posts from '@/components/Posts/Posts';
import PostSearch from '@/components/PostSearch/PostSearch';



export const metadata: Metadata = {
    title: 'Blog | Next App',
}

export default async function Blog() {
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {getAllPosts()
        .then(setPosts)
        .finally(() => setLoading(false))}, [])
        
    return (
        <>
            {loading ? <h3>Loading...  </h3> : 
            <> 
            <div>Blog page</div>
            <PostSearch onSearch={setPosts}/>
            <Posts posts={posts}/>
            </>
            }
        </>
    )

}