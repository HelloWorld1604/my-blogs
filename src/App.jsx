import './App.css'

import Navigation from './pages/components/Navigation.jsx';
import Home from './pages/Home.jsx';
import Quote from './pages/Quote.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Contact from './pages/Contact.jsx';
import Fooster from './pages/Fooster.jsx';

function App() {

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

export default App;