import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PasswordGenerator() {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const minLength = 8;
    const maxLength = 20;
    const randomLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let generatedPassword = '';
    
    for (let i = 0; i < randomLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
      .then(() => alert('Password copied to clipboard!'))
      .catch(err => alert('Failed to copy password: ', err));
  };

  return (
    <div className="container mt-4">
      <h1>Password Generator</h1>
      <input
        type="text"
        value={password}
        readOnly
        className="form-control mb-3"
        placeholder="Generated Password"
      />
      <label htmlFor="lengthRange">Password Length: {password.length}</label>
      <input
        type="range"
        id="lengthRange"
        min="8"
        max="20"
        value={password.length}
        disabled
        className="form-range mb-3"
      />
      <button className="btn btn-primary me-2" onClick={generatePassword}>Generate Password</button>
      <button className="btn btn-secondary" onClick={copyToClipboard}>Copy to Clipboard</button>
    </div>
  );
}

export default PasswordGenerator;
