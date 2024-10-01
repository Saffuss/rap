import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Gallery from './components/Gallery';
import PopUp from './components/PopUp';

function App() {
  const filters = ['a', 'b', 'c', 'd', 'e', 'f'];

  return (
    <div className="App">
      <Header />
      <Search filters={filters} />
      <Gallery />
      <PopUp />
    </div>
  );
}

export default App;
