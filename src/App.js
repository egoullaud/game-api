import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Search from './components/Search';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Search/>    
      </BrowserRouter>  
    </div>
  );
}

export default App;
