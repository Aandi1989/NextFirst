'use client';

import useSWR from "swr";
import { FormEventHandler, useState } from "react";
import './PostSearch.scss'
import { getPostBySearch } from "@/services/getPost";


const PostSearch = () => {
    const {mutate} = useSWR("posts")
    const [search, setSearch] = useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const posts = await getPostBySearch(search);
        mutate(posts)
    }
  return (
    <form className="form" onSubmit={handleSubmit}>
        <input className="form__input" type="search" placeholder="search" value={search} onChange={event => setSearch(event.target.value)}/>
        <button className="form__button" type="submit">Search</button>
    </form>
  );
};

export default PostSearch;