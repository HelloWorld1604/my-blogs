import './HomeLayout.css'

import Navigation from './components/Navigation.jsx';
import Home from './home-page/Home.jsx';
import Quote from './home-page/Quote.jsx';
import AboutMe from './home-page/AboutMe.jsx';
import Contact from './home-page/Contact.jsx';
import Fooster from './home-page/Fooster.jsx';

function HomeLayout() {

  return (
    <div id="main-line">
      <Navigation />
      <Home />
      <Quote />
      <AboutMe />
      <Contact />
      <Fooster />
    </div>
    
  )
}

export default HomeLayout;