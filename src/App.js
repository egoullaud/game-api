
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Game from './pages/Game';
import Genre from './components/Genre';
import Home from './pages/Home';
import EachGenre from './pages/EachGenre';



function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/genre/:type" element={<EachGenre/>}/>
        <Route path="/game/:name" element={<Game/>}/>

      </Routes>
     

    
    </div>
  );
}

export default App;
