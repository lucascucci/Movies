import './App.css';
import PeliProvider from './context/PeliContext';
import FilterMovies from './components/FilterMovies/FilterMovies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Series from './components/Series/Series';
import SerieBBContainer from './components/SerieBBContainer/SerieBBContainer';
import DetailContainerBB from './components/DetailContainerBB/DetailContainerBB';
import SerieHMD from './components/Series/SerieHMD/SerieHMD';


function App() {


  return (
<BrowserRouter>
  <NavBar/>
    <PeliProvider>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/peliculas' element={<FilterMovies/>}/>
      <Route path='/series' element={<Series/>}/>
      <Route path='/series/housemd' element={<SerieHMD/>}/>
      <Route path='/series/bb' element={<SerieBBContainer/>}/>
      <Route path='/serieBB/:id' element={<DetailContainerBB/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </PeliProvider>
    <Footer/>
</BrowserRouter>
  );
}

export default App;
