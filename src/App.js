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
import { Helmet } from 'react-helmet';
import SideMenu from './sections/components/SideMenu';

function App() {
  const { lightMode } = useContext(ThemeContext);
  return (
    <div className={lightMode ? "" : "dark"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Develoqer</title>
        <link rel="canonical" href="https://develoqer.com" />
       
        <meta name="description" content="Ahmet Necdet Yalçın - Web Developer - Backend Developer - UI/UX Designer" />
      </Helmet>
      <ToastContainer />
      <SideMenu/>
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
