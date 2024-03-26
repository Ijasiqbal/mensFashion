import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import AccountPage from './pages/AccountPage';
import SignupForm from './components/loginsginup/SignupForm';
import LoginForm from './components/loginsginup/LoginForm';
import Product from './pages/ProductList';
import Individualpage from './pages/individualproduct';

function App() {
  
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path='/create-account' element={<SignupForm/>}/>
        <Route path='/login' element={<LoginForm  />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/individualpage' element={<Individualpage />}/>
      </Routes>
    </Router>
  );
}

export default App;