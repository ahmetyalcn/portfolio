import Header from './sections/Header';
import './App.css';
import { ThemeContext } from './contexts/context';
import { useContext } from 'react';
import Skills from './sections/Skills';
import Profile from './sections/Profile';
import Projects from './sections/Projects';
import Footer from './sections/Footer';

function App() {
  const {lightMode} = useContext(ThemeContext);
  return (
    <div className={lightMode ? "" : "dark"}>
      <Header/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
