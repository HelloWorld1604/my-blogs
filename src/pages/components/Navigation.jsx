import './Navigation.css';

function Navigation() {

return(
    <div id="nav-bar">
        <a href="#home" style={{position:"absolute", left:"3vw"}}><img id="logo" src="/BeoBeo_typo.png" /></a>
        <a href="#home" className="nav-buttons">Home</a>
        <a href="#about-me" className="nav-buttons">About me</a>
        <button className="nav-buttons">Blogs</button>
        <a href="#contact" className="nav-buttons">Contact</a>
    </div>
)
}

export default Navigation;