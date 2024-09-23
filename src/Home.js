import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Auth from './Auth';
import './Home.css';

function Home() {
  
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the login logic here (e.g., API call)
        console.log('Username:', username);
        console.log('Password:', password);
    };

  return (
    <div className="row">
      <div className="column1"></div>
      
      <div className="column2">
        <div className="item">
          <form onSubmit={handleSubmit}>
              <div>
                <label className="elabel" htmlFor="email">Email:</label>
                <br/>
                <input className='email'
                    type="email"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label className="plabel" htmlFor="password">Password:</label>
                <br/>
                <input className='password'
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="form-container">
                    <label className="remember-me">
                    <input type="checkbox" name="remember" />
                    Remember Me
                    </label>
                    <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <div className="button-container">
            <button className="login-button" type="submit">Login</button><br/>
            <button className="login-button" type="submit">Sign Up</button>
            </div>

            <GoogleOAuthProvider clientId="your_google_client_id">
            <div className="App">
                <Auth />
            </div>
            </GoogleOAuthProvider>

        </form>
     </div> 
     

  </div>
</div>
  );
}

export default Home;
