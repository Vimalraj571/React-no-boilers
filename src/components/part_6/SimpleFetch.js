import { useEffect, useState } from "react";

const SimpleFetch = () => {
  const [posts, setPost] = useState([
    {
      userId: 0,
      id: 0,
      title: "test post",
      body: "test body post",
    },
  ]);
  console.log("posts");
  console.log(posts);
  const postsLi = posts.map((post) => (
    <li key={post.id}>
      <p>Title : {post.title}</p>
      <p>Body : {post.body}</p>
    </li>
  ));

  useEffect(() => {
    const getPost = async () => {
      const postsNetwork = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (postsNetwork.status === 200) {
        const response = await postsNetwork.json();
        setPost(response);
      }
    };
    getPost();
  }, []);
  return (
    <>
      <ol>{postsLi}</ol>
    </>
  );
};

export default SimpleFetch;
