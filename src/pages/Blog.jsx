import "./Blog.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navigation from "./components/Navigation.jsx";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "posts.json")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []); // chỉ chạy 1 lần khi mount

  return (
    <div id="main-line">
      <Navigation />
      <div>
        <h1>My Blogs</h1>

        <div style={{ backgroundColor: "lightblue" }}>
          {posts.map(post => (
            <article key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <small>{post.created_at}</small>
              <br/>
              <Link to={`/bbablogs/${post.slug}`}>Read more</Link>
              <hr />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;