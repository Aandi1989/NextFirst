import { Metadata } from 'next';
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
