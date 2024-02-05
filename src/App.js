import { useContext } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext)

  const darkMode = theme.state.darkMode

  return (
    <section className={darkMode ? ' ' : 'day'}>
      <Navbar/>
      <div className='app'>
        <Hero/>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    </section>
  );
}

export default App;
