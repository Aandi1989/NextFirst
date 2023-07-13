import { Metadata } from 'next';
import styles from './page.module.scss';
import { useEffect } from 'react';
import { getAllPosts } from '@/services/getPost';
import Posts from '@/components/Posts/Posts';
import PostSearch from '@/components/PostSearch/PostSearch';



export const metadata: Metadata = {
    title: 'Blog | Next App',
}

export default async function Blog() {
   
    return (
        <>
            <div>Blog page</div>
            <PostSearch />
            <Posts />
        </>
    )

}
/*данный компонент явл. серверным, а оба его дочерних компонента клиентскими потому что там используются
  хуки и пользовательские события */ 
