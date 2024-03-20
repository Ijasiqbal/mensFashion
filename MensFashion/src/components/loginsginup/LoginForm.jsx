import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './loginform.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the input and handle errors
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    // Call the login API or perform other login actions
    console.log(`Logging in with username ${username} and password ${password}`);
    setError('');
    // Reset the form fields after submission (optional)
    setUsername('');
    setPassword('');
  };

  return (

    <div>
      <form className="login-form" onSubmit={handleSubmit}>
      <h2 >Sign In</h2> {/* Added Sign In heading */}
      <div className="form-group">
        <div className="icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input className='input-section' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <div className="icon">
          <FontAwesomeIcon icon={faLock} />
        </div>
        <input className='input-section' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button className='button-login ' type="submit">Log in</button>
      <Link to="/Signup"> <button className='button-create-account'>Create Account</button></Link>
    </form>
    </div>
  );
}

export default LoginForm;
