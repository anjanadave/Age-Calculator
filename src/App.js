import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthdate) {
      const today = new Date();
      const birthDate = new Date(birthdate);
      const ageInMilliseconds = today - birthDate;
      const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
      setAge(ageInYears);
            
    } else {
      setAge(null);
    }
  };

  const resetFields = () => {
    setBirthdate('');
    setAge(null);
  };

  return (
    <>
      <div className='main'>
        <h1>Age Calculator</h1>
        <h2>Date of Birth</h2>
        <div className='demo'>
          <div className='calculate'>
            <input type='date' value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
          </div>
          <div className='reset'>
            <button type='btn' onClick={calculateAge}>Calculate Age</button>
            <button type='btn' className='btn' onClick={resetFields}>Reset</button>
          </div>
        </div>
        {age !== null && (
          <div className='result'>
            <p>Your age is: {age} years</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
