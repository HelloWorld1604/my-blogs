import './Home.css';
import Navigation from './components/Navigation.jsx';

function Home() {
    return (
        <div id="home">
            <p id="Title">Hello World</p>
            <p id="Title-sub-text">welcome to my landing page</p>
            <div className="home-buttons">
                <a href="#about-me" id="about_me_button">About me</a>
                <a href="#about-me" id="blogs_button">Blogs</a>
            </div>
        </div>
    )
}

export default Home;