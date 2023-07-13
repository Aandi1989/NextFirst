'use client';

import useSWR from "swr";
import { FormEventHandler, useState } from "react";
import styles from './PostSearch.module.scss'
// import { usePosts } from "@/store";
import { getPostBySearch } from "@/services/getPost";


const PostSearch = () => {
    const {mutate} = useSWR("posts")
    const [search, setSearch] = useState('');
    // const getPostsBySearch = usePosts(state =>state.getPostsBySearch)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const posts = await getPostBySearch(search);
        mutate(posts)
    }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.form__input} type="search" placeholder="search" value={search} onChange={event => setSearch(event.target.value)}/>
        <button className={styles.form__button} type="submit">Search</button>
    </form>
  );
};

export default PostSearch;