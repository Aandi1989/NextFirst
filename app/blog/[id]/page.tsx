import { Metadata } from "next";

type Props = {
    params: {
        id:string // id потому что папку назвали id
    }
}

export async function generateMetadata({params:{id}}: Props): Promise<Metadata>{
  return{
    title: id,
  }
}

const Post = ({params:{id}}: Props) => {
  return (
    <h1>
       Post page {id}
    </h1>
  );
};

export default Post;