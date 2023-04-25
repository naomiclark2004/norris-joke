import React, { useState } from "react";
import './App.css';

function App() {
  const [jokes, setJokes] = useState('')

  async function fetchJoke() {
    let url = `https://api.chucknorris.io/jokes/random`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': '855f56251bmsh356d45fc2129645p17cb05jsnc4d4b23c0a33',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
      }
    };
    console.log(url);
    const response = await fetch(url, options);
    
    const res = await response.json();
    console.log(res);
    setJokes(res)
  }

  return (
    <div className="container">
      <h1>Joke Generator</h1>
      <div className="joke">
        <p>{jokes.value}</p>
      </div>
      <button onClick={fetchJoke}>PUSH ME</button>
    </div>
  )
}

export default App;
