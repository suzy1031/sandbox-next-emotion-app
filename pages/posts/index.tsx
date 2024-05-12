import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Props = {
  posts: Post[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts: Post[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};

const Posts: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <h1>Posts Page</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Posts;
