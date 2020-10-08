import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data, setMessages] = useState({ });

  useEffect(() => {

    let ignore = false;

    async function fetchData() {
      const result = await axios('https://cors-anywhere.herokuapp.com/https://8n8q46zzb8.execute-api.us-east-1.amazonaws.com/Prod/hello/');
      console.log(result)
      if (!ignore) setMessages(result.data);
    }

    fetchData();
    return () => {ignore = true;}
  }, [])

  return (
    
    <div className="App">
      <h1>{data.message}</h1>
    </div>
  );
}

export default App;
