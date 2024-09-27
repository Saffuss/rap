import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Gallery from './components/Gallery';
import PopUp from './components/PopUp';

function App() {
  const filters = ['a', 'b', 'c', 'd', 'e', 'f'];
  const images = ['https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?cs=srgb&dl=pexels-krisof-1252890.jpg&fm=jpg', 'https://wallpapers.com/images/featured/space-sjryfre8k8f6i3ge.jpg', 'https://img.freepik.com/free-photo/glowing-sky-sphere-orbits-starry-galaxy-generated-by-ai_188544-15599.jpg', 'https://t3.ftcdn.net/jpg/05/69/72/02/360_F_569720237_58rhoQoMjxyB0QCeXQK0OVUA0qNogTmq.jpg', 'https://t3.ftcdn.net/jpg/05/58/61/32/360_F_558613274_Z1zbjnHZKjpnTvvsjfZzYXk2TIeUl54a.jpg', 'https://previews.123rf.com/images/junhoushou/junhoushou2304/junhoushou230401479/203474770-astronaut-in-outer-space-colorful-illustration-with-space-theme.jpg']

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
