import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navigation from "./components/Navigation.jsx";

function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
  fetch(import.meta.env.BASE_URL + "posts.json")
    .then(res => res.json())
    .then(posts => {
      const found = posts.find(p => p.slug === slug);
      setPost(found);
    });
  }, [slug]);

  if (!post) return <p>Post not found</p>;

  return (
    <div>
        <Navigation/>
        <div>
            <article>
            <img  src={import.meta.env.BASE_URL + post.illustration}
                  style={{ width:"30vw", height:"60vh"}}/>
            <h1>{post.title}</h1>
            <small>{post.created_at}</small>
            <hr />
            <p>{post.content}</p>
            </article>
        </div>
    </div>
  );
}

export default BlogDetail;