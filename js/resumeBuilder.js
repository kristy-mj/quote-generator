var randomQuote = {
  "quotes": [
    {
      "quote": "If you haven't got anything nice to say about anybody, come sit next to me.",
      "author": "Alice Roosevelt Longworth"
    },
    {
      "quote": "Wassuuuuuuuuup",
      "author": "Scary Movie 1"
    },
    {
      "quote": "Do not take life too seriously. You will never get out of it alive.",
      "author": "Elbert Hubbard"
    }
  ],
};



function displayQuote(){
  var quoteArray = [];
  for (quotes in randomQuote) {
    var grabQuote = randomQuote.quotes[Math.floor(randomQuote.quotes.length * Math.random())].quote;
    // var grabAuthor = randomQuote.quotes[i].author;
    // quoteArray = [grabQuote, grabAuthor];
    quoteArray.push(grabQuote);
  }
    return quoteArray;


};
displayQuote();






$('#quote').append(displayQuote)

$('#quote').append(quoteButton);




