import './Navigation.css';

import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

function Navigation() {

return(
    <div id="nav-bar">
        <HashLink smooth to="/#home" style={{position:"absolute", left:"3vw"}}><div id="logo"/></HashLink>
        <HashLink smooth to="/#home" className="nav-buttons">Home</HashLink>
        <HashLink smooth to="/#about-me" className="nav-buttons">About me</HashLink>
        <Link to="/bbablogs" className="nav-buttons">Blogs</Link>
        <HashLink smooth to="/#contact" className="nav-buttons">Contact</HashLink>
    </div>
)
}

export default Navigation;