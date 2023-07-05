import './App.css';
import PeliProvider from './context/PeliContext';
import FilterMovies from './components/routes/FilterMovies/FilterMovies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/routes/Home/Home';
import ItemDetailContainer from './components/routes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Series from './components/routes/Series/Series';
import DetailContainerBB from './components/routes/DetailContainerBB/DetailContainerBB';
import SerieHMD from './components/routes/Series/SerieHMD/SerieHMD';
import SerieBB from './components/routes/Series/SerieBB/SerieBB';


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
      <Route path='/series/bb' element={<SerieBB/>}/>
      <Route path='/serieBB/:id' element={<DetailContainerBB/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </PeliProvider>
    <Footer/>
</BrowserRouter>
  );
}

export default App;
