import './Fooster.css';

function Fooster() {
    return (
        <div id="fooster">
            <a href="#home" id="fooster-logo"/>

            <div className="fooster-link-container">
                <a className="fooster-links" href="#about-me">About me</a>
                <a className="fooster-links" href="#home">Blogs</a>
                <a className="fooster-links" href="#home">Newletter</a>    
            </div>
            
            <div className="social-medias-container">
                    <a href="https://www.facebook.com/luong.trang.94043/" className="fooster-social-medias" id="Facebook"/>
                    <a href="https://www.instagram.com/cheesechesie/" className="fooster-social-medias" id="Ig"/>
                    <a href="https://www.linkedin.com/in/trang-luong-a4b773216/" className="fooster-social-medias" id="LinkIn"/>
                    <a href="https://github.com/HelloWorld1604" className="fooster-social-medias" id="GitHub"/>
            </div>
            <p id="copyright" >© 2025 BeoBeo. All rights reserved.</p>

            <img id="left-cloud" src="./components/left-clouds.png"/>
            <img id="right-cloud" src="./components/right-clouds.png"/>
            
        </div>        
    )
}

export default Fooster;