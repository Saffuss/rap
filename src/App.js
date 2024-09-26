import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Gallery from './components/Gallery';
import PopUp from './components/PopUp';

function App() {
  const filters = ['a', 'b', 'c', 'd', 'e', 'f'];
  const images = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8']

  return (
    <div className="App">
      <Header />
      <Search filters={filters} />
      <Gallery images={images} />
      <PopUp />
    </div>
  );
}

export default App;
