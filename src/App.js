import React, { useState } from "react";
import './App.css';

function App() {
  const [jokes, setJokes] = useState('')

  async function fetchJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
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
