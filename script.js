const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote'); 
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Get Quotes from API
// https://premium.zenquotes.io/zenquotes-documentation/#api-structure
// https://zenquotes.io/api

function newQuote() {
    // Pick a random quote from apiQuotes array 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote);
    // if author is blank use 'unknown'
    if(!quote.author) {
        authorText.textContent = 'Unknown Author'
    } else {
        authorText.textContent = quote.author;
    }
    // authorText.textContent = quote.author;
    // Check for long quotes
    if(quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Show quote text
    quoteText.textContent = quote.text;

}
// Get quotes  from API
async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        // console.log(apiQuotes[55]);
        newQuote();
    } catch (error) {
        // Catch Error
    }
}
// Send quote to twitter acct
function tweetQuote() {
    // const twitterURL = 'https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}';
    const twitterURL = 'https://api.twitter.com/2/tweets'
    window.open(twitterURL, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// On Load
getQuotes()

// console.log('Hello You!!');