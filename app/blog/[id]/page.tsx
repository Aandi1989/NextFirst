type Props = {
    params: {
        id:string // id потому что папку назвали id
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