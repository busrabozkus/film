import './App.css';
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import Watched from './components/Watched';
import "./lib/fontawesome/css/all.min.css"
import Add from './components/Add';
import { GlobalProvider } from './context/GlobalState';




function App() {
 
  return (
    <GlobalProvider>
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Watchlist/>}></Route>
      <Route path='/watched' element={<Watched/>}></Route>
      <Route path="/add" element={<Add/>}></Route>
    </Routes>
    </BrowserRouter>

    </GlobalProvider>
    
  );
}

export default App;
