import { Metadata } from "next";
import '../../styles/globals.scss'

async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
  {
      next: {
          revalidate: 60, // запрос на  обновление постов будет происходить на сервере каждые 60 секунд 
      },
  })
  return response.json()
}

type Props = {
    params: {
        id:string // id потому что папку назвали id
    }
}

export async function generateMetadata({params:{id}}: Props): Promise<Metadata>{
  const post = await getData(id);

  return{
    title: post.title,
  }
}

export default async function Post ({params:{id}}: Props) {
  const post = await getData(id)

  return (
    <>
       <h1 className="blogId__title">{post.title}</h1>
       <p className="blogId__text">{post.body}</p>
    </>
  );
};
