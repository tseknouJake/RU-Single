import React, { useState, useEffect } from 'react';

const ServerTest = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api').then((res) => res.json()).then((data) => {
      setData(data.message);
    })
  }, []);


  return (
    <div>
      <h1>Server Test Page</h1>
      <p>Data from server: {data}</p>
    </div>
  );
};

export default ServerTest;