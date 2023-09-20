
import './App.css';
import Projectpage from "./pages/Projectpage";


import NavbarCustom from './Home componets/Navbar_custom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
      <NavbarCustom/>
     <Projectpage/>
    
  

    </div>
  );
}

export default App;
