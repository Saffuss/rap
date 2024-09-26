import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Gallery from './components/Gallery';
import PopUp from './components/PopUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Gallery />
      <PopUp />
    </div>
  );
}

export default App;
