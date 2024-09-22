import React from 'react';
import { useState } from 'react';

function SignUp() {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = {};
    
        if (/\s/.test(username)) {
          validationErrors.username = "El username no debe contener espacios.";
        }
    
        if (!/^[a-zA-Z\s]*$/.test(fullName)) {
          validationErrors.fullName = "El nombre completo solo puede contener letras.";
        }
    
        const ageNum = Number(age);
        if (isNaN(ageNum) || ageNum < 1 || ageNum > 110) {
          validationErrors.age = "La edad debe ser un número entre 1 y 110.";
        }
    
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
    
        setSubmittedData({ username, fullName, age });
        setUsername('');
        setFullName('');
        setAge('');
        setErrors({});
      };
    return (
        <div className="container mt-4">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            type="text"
            id="fullName"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            id="age"
            className={`form-control ${errors.age ? 'is-invalid' : ''}`}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {submittedData && (
        <div className="mt-4">
          <h2>Request sent to DB with below request data</h2>
          <p><strong>Username:</strong> {submittedData.username}</p>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
        </div>
      )}
    </div>
    );
}
export default SignUp;