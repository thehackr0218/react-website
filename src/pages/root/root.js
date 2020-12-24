// import { Link } from "react-router-dom";
import './Root.css';
import Twitch from '../../Components/twitch/Twitch.js';
import Header from '../../Components/header/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Twitch />
    </div>
  );
}

export default App;
