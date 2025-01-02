import { useState,useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import quotes from './db';
function App() {
  //const [quotes,setQuotes] = useState([]);
  const [randomQuote,setRandomQuote] = useState({"quote":"Generate a quote","author":"by Author Name"});
  /*async function fetchDB(){
    const response = await fetch("http://localhost:5173/data/db.json");
    const result = await response.json();
    setQuotes(result.quotes);
  }
  useEffect(()=>{
    setTimeout(()=>{
      fetchDB();
    },1000);
  },[]);*/ 
  
  function newRandomQuote(){
    const rand =Math.floor( Math.random() * quotes.length);
    setRandomQuote(quotes[rand]);
    
  }
  return (
    <div id="quote-box">
      <p id="text"> { randomQuote.quote} </p>
      <p id="author">- { randomQuote.author } </p>
      <button id="new-quote" onClick={()=>newRandomQuote()}>New Quote</button>
      <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">Tweet</a>
    </div>
  )
}

export default App;