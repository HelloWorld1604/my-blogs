import './Highlight.css';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Highlight(){
    const [posts, setPosts] = useState([]);
    const limit = 3; // highlight only 3 posts
    
      useEffect(() => {
        fetch(import.meta.env.BASE_URL + "posts.json")
          .then(res => res.json())
          .then(data => setPosts(data));
      }, []);

    return(
        <div id="highlight">
            <div className="highlight-title-container">
                <h1 className="highlight-title">My Stories</h1>
                <p className="highlight-sub">down here are some stories, blogs, the things that i have been learnt, then i would love to share with people my wonderful life...</p>
            </div>

            <div className="highlight-content-container">
                {posts.slice(0, limit).map(post => (      
                    <article key={post.id}>
                        <div className="highlight-card">
                            <p className="highlight-preview-title">#{post.id} {post.title}</p>

                            <img className="highlight-illu"  src={import.meta.env.BASE_URL + post.illustration}/>

                            <div className="highlight-preview-content">{post.preview}</div>

                            <Link className="highlight-preview-button" to={`/bbablogs/${post.slug}`}>Read more</Link>
                            
                        </div>
                    </article>
                
                ), 2)}
            </div>

            <Link to="/bbablogs" className="see-more-button">See more</Link>
        </div>
   );
}

export default Highlight;