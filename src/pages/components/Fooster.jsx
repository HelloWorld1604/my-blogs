import './Fooster.css';

import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

function Fooster() {
    return (
        <div id="fooster">
            <HashLink smooth to="/#home" id="fooster-logo"></HashLink>

            <div className="fooster-link-container">
                <HashLink smooth to="/#about-me" className="fooster-links">About me</HashLink>
                <Link to="/bbablogs" className="fooster-links">Blogs</Link>
                <HashLink smooth to="/#contact" className="fooster-links">Contact me</HashLink>
            </div>
            
            <div className="social-medias-container">
                    <a href="https://www.facebook.com/luong.trang.94043/" className="fooster-social-medias" id="Facebook"/>
                    <a href="https://www.instagram.com/cheesechesie/" className="fooster-social-medias" id="Ig"/>
                    <a href="https://www.linkedin.com/in/trang-luong-a4b773216/" className="fooster-social-medias" id="LinkeIn"/>
                    <a href="https://github.com/HelloWorld1604" className="fooster-social-medias" id="GitHub"/>
            </div>
            <p id="copyright" >© 2026 BeoBeo. All rights reserved.</p>
        </div>        
    )
}

export default Fooster;