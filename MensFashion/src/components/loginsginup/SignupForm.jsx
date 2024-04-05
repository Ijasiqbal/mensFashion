import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import CSS for react-phone-number-input
import './signupform.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function SignupForm() {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the input and handle errors
    if (!username || !phoneNumber || !email || !password || !confirmPassword) {
      setError('Please enter all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Call the signup API or perform other signup actions
    console.log(`Signing up with username ${username}, phone number ${phoneNumber}, email ${email}, password ${password}, and confirm password ${confirmPassword}`);
    setError('');
  };

  return (
    <div className='signup-container'>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <div className="form-group">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input className='input-section' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <PhoneInput className='input-phonenumber-section'
            defaultCountry=""
            placeholder="Phone Number"
            international
            countryCallingCodeEditable={true}
            value={phoneNumber}
            onChange={setPhoneNumber}
            required
          />
        </div>
        <div className="form-group">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <input className='input-section' type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <div className="icon">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input className='input-section' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <div className="icon">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input className='input-section' type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className='button-signup' type="submit">Sign up</button>
        <p>Already have an account? <Link to="/Login">Sign in</Link></p> 
      </form>
    </div>
  );
}

export default SignupForm;
