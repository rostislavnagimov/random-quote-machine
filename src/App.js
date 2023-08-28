import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState();
  const number = Math.floor(Math.random() * 100)

  const url = 
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

  const fetchQuote = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {setQuote(data.quotes[number])})
  }
  useEffect(() => {
    fetchQuote(url)
  }, [])


  return (
    <>
      {quote && (
        <div className="App">
          <div id="quote-box">
            <div  id="text">
              {quote.quote}
              <div id="author">
              {quote.author}

            </div>
            <button id="new-quote" onClick={()=>{fetchQuote(url)}}>New quote</button>
            <a href='twitter.com/intent/tweet' id="tweet-quote"></a>

            </div>
          </div>
        </div>)
      }
    </>
  );
}

export default App;
