import Header from './sections/Header';
import './App.css';
import { ThemeContext } from './contexts/context';
import { useContext } from 'react';
import Skills from './sections/Skills';
import Profile from './sections/Profile';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import ScrollUp from './sections/components/ScrollUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {lightMode} = useContext(ThemeContext);
  return (
    <div className={lightMode ? "" : "dark"}>
      <ToastContainer/>
      <Header/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
      <ScrollUp/>
    </div>
  );
}

export default App;
