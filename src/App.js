import logo from './logo.svg';
import './App.css';
import AllCrypto from './components/AllCrypto';
import { Router } from '@reach/router';
import Navbar from './components/Navbar';
import CryptoDetails from './components/CryptoDetails';

function App() {
  return (

    
    <div className="App">
      <Router>
        <AllCrypto path = "/"></AllCrypto>
        <CryptoDetails path = "/CryptoDetails/:id"></CryptoDetails>
      </Router>
      
    
    </div>
  );
}

export default App;
