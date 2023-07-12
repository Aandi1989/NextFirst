'use client';

import { getPostBySearch } from "@/services/getPost";
import { FormEventHandler, useState } from "react";
import styles from './PostSearch.module.scss'

type Props = {
    onSearch: (value:any[]) => void
}

const PostSearch = ({onSearch}:Props) => {
    const [search, setSearch] = useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const posts = await getPostBySearch(search);
        onSearch(posts);
    }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.form__input} type="search" placeholder="search" value={search} onChange={event => setSearch(event.target.value)}/>
        <button className={styles.form__button} type="submit">Search</button>
    </form>
  );
};

export default PostSearch;