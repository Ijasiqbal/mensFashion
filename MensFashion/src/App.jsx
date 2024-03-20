import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import AccountPage from './pages/AccountPage';
import SignupForm from './components/loginsginup/SignupForm';
import LoginForm from './components/loginsginup/LoginForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route />
        <Route path="/" element={<Home />} />
        <Route path='/Signup' element={<SignupForm/>}/>
        <Route path='/Login' element={<LoginForm  />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;