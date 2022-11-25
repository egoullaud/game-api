
import { BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import Paths from './pages/Paths';


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Paths/>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
