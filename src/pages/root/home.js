
import './home.css';
import Twitch from '../../Components/twitch/Twitch';
import Header from '../../Components/header/Header';
import Sidebar from '../../Components/Bar/bar';
import Navbar from '../../Components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Header />
      <Twitch />
    </div>
  );
}

export default App;
