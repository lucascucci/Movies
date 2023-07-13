import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PeliProvider from './context/PeliContext';
import Home from './components/routes/Home/Home';
import FilterMovies from './components/routes/FilterMovies/FilterMovies';
import Series from './components/Serie/Series';
import SerieHMD from './components/routes/Series/SerieHMD/SerieHMD';
import SerieBB from './components/routes/Series/SerieBB/SerieBB';
import DetailContainerBB from './components/routes/DetailContainerBB/DetailContainerBB';
import ItemDetailContainer from './components/routes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


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
