import { GetServerSideProps, GetServerSidePropsContext } from "next";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Props = {
  post: Post;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const { id } = context.params;
  const response = await fetch(`http://localhost:3000/api/posts/${id}`);
  const post: Post = await response.json();

  return {
    props: {
      post,
    },
  };
};

const Post: React.FC<Props> = ({ post }) => {
  return (
    <>
      <h1>Post Page</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};
export default Post;
