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

        <div>
          {posts.map(post => (      
            <article className="article" key={post.id}>
              <div className="blog-card">
                <img className="blog-illu"  src={import.meta.env.BASE_URL + post.illustration}/>
                <div className="preview-wrap">
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  <small>{post.created_at}</small>
                  <br/>
                  <Link to={`/bbablogs/${post.slug}`}>Read more</Link>
                </div>
              </div>
            </article>
          
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;