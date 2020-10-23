import React, { useState, useEffect } from 'react';

export default function Form() {
  const [ipAddr, setIpAddr] = useState('8.8.8.8');
  useEffect(() => {
    // Initial Axios call here
    console.log('hello');
  }, [ipAddr]);

  return (
    <div>
      <button type="submit" onClick={setIpAddr()}>
        Submit
      </button>
      <h2>{ipAddr}</h2>
    </div>
  );
}
