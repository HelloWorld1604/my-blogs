import './Home.css';
import Navigation from './components/Navigation.jsx';

function Home() {
    return (
        <div id="home">
            <p id="Title">Cái dĩ zay</p>
            <p style={{fontFamily:"Inter", color:"#404040", fontSize:"20px"}}>tại sao không fix bugs mà đã đi ngủ?</p>
            <div className="home-buttons">
                <a href="#about-me" id="about_me_button">About me</a>
                <a href="#about-me" id="blogs_button">Blogs</a>
            </div>
        </div>
    )
}

export default Home;