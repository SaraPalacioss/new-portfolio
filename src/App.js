import React, {Fragment} from 'react';
import './App.scss';
import Cover from './components/Cover';
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';
import OtherProjects from './components/OtherProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Cover/>
      <AboutMe/>
      <Projects/>
      <OtherProjects/>
      <Contact/>
      <Footer/>
    </Fragment>
  );
}

export default App;
