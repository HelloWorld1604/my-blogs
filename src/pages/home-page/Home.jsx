import './Home.css';

import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div id="home">
            <p id="Title">Hello World</p>
            <p id="Title-sub-text">welcome to my landing page</p>
            <div className="home-buttons">
                <HashLink smooth to="/#about-me" id="about_me_button">About me</HashLink>
                <Link to="/bbablogs" id="blogs_button">Blogs</Link>
            </div>
        </div>
    )
}

export default Home;