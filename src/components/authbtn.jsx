import React from 'react';
import './App.css';

function App() {
  const handleLogin = () => {
    window.location.href = '/auth/cas';  // Redirect to CAS login
  };

  return (
    <div className="app-container">
      <h1>Welcome to UCBMealz</h1>
      <button onClick={handleLogin} className="login-button">Login with CalNet</button>
    </div>
  );
}

export default App;
