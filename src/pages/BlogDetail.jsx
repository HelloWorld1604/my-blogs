import "./BlogDetail.css";

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
            <article className="post-container">
              <h3 className="post-hastag">#{post.id}</h3>
              <h1 className="post-title">{post.title}</h1>
              <small className="post-update">{post.created_at}</small>
              <img className="post-illu"  src={import.meta.env.BASE_URL + post.illustration}/>
              <div className="post-line" />
              <div className="post-content-wrap">
                <p className="post-content">{post.content}</p>
              </div>
            </article>
        </div>
    </div>
  );
}

export default BlogDetail;