import './HomeLayout.css'

import Navigation from './components/Navigation.jsx';
import Home from './home-page/Home.jsx';
import Highlight from './home-page/Highlight.jsx';
import AboutMe from './home-page/AboutMe.jsx';
import Contact from './home-page/Contact.jsx';
import Fooster from './components/Fooster.jsx';

function HomeLayout() {

  return (
    <div id="main-line">
      <Navigation />
      <Home />
      <Highlight />
      <AboutMe />
      <Contact />
      <Fooster />
    </div>
    
  )
}

export default HomeLayout;