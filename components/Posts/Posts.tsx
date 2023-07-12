import Link from 'next/link';
import styles from './posts.module.scss'

type Props ={
    posts:any[]
}

const Posts = ({posts}: Props) => {
  return (
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