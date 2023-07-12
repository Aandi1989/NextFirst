import { Metadata } from 'next'
import styles from './page.module.scss'
import Link from 'next/link'

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next: {
            revalidate: 60, // запрос на  обновление постов будет происходить на сервере каждые 60 секунд 
        },
    })

    if(!response.ok) throw new Error("Unable to fetch posts!") // можно самому выбрасывать определенные ошибки, которые отобразятся на странице Error
    return response.json()
}

export const metadata: Metadata = {
    title: 'Blog | Next App',
}

export default async function Blog() {
    const posts = await getData()

    return (
        <>
            <div>Blog page</div>
            <ul className={styles.listWrapper}>
                {posts.map((post:any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )

}