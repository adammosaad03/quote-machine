import React, {useState} from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const Quote = () => {
  const quotes = [
    
    
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      text: "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
    },
  ];
  
const getQuote = () =>{
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
const [quote, setQuote] = useState(getQuote());
  
  const newQuote = () => {
    setQuote(getQuote());
  }
  const tweetUrl=`https://twitter.com/intent/tweet?text="${encodeURIComponent(quote.text)}" - ${encodeURIComponent(quote.author)}`
  const containerStyle= {
    display: "flex",
    
    justifyContent: "center",
    alignItems: "center",
    padding:"20px",
    border:"2px solid red",
    height: "100vh",
    width: "200px",
    margin: "auto"
  }
  const quoteboxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    
    textAlign: "center",
    
  }
  
    return(
      <div style={containerStyle}>
      <div id="quote-box" style={quoteboxStyle}>
        <p id="text">{quote.text}</p>
        <p id="author">- {quote.author}</p>
        <button id="new-quote" onClick={newQuote}>
          New Quote
          </button>
          <a id="tweet-quote" href={tweetUrl} target="_blank">
        <button>Tweet Quote</button>
      </a>
        </div>
        </div>
    )
  
}
  ReactDOM.render(<Quote />, document.getElementById("root"))
