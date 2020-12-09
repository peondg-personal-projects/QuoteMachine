var endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

// Function - getQuote, Generates a random Trump quote
// This functon will be called whenever the button is clicked
function getQuote() {
   fetch(endpoint)
    .then(function (response){
       return response.json();
   })
    .then(function (data) {
       displayQuote(data.message);
   })
    .catch(function() {
       console.log("An error occurred");
   });
}

// Function - displayQuote 
// Input - var quote (a string)
// Output - Quote text is updated on the page with the quote provided 
// This will be called from the getQuote function
function displayQuote(quote) {
    var quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

// Add functionality of getting new quotes by clicking on the 
// More Donald button
var newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

// Call to getQuote to pre-load a quote on the page when it first loads
getQuote();