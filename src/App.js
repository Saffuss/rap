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
      <a href='https://www.reddit.com/r/spaceporn'>View full Reddit website here.</a>
    </div>
  );
}

export default App;
