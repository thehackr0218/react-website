import React, { useState } from 'react'
import './home.css';
import Twitch from '../../Components/twitch/Twitch';
import Header from '../../Components/header/Header';
import Sidebar from '../../Components/Bar/bar';
import Navbar from '../../Components/navbar/navbar';
import About from '../../Components/about/about'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Header />
      <About />
      <Twitch />
    </div>
  );
}

export default App;
