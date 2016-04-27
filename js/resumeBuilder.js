var randomQuote = {
  "quotes": [
    {
      "quote": "If you haven't got anything nice to say about anybody, come sit next to me.",
      "author": "Alice Roosevelt Longworth"
    },
    {
      "quote": "Do not take life too seriously. You will never get out of it alive.",
      "author": "Elbert Hubbard"
    },
    {
      "quote": "Wassuuuuuuuuup",
      "author": "Scary Movie 1"
    }
  ],

};

function displayQuote(){
  for (quote in randomQuote.quotes) {
    $('#quote').append(HTMLquote);
    var formattedQuote = HTMLquoteContent.replace('%data%', randomQuote.quotes[quote].quote);
    $('.quote-entry').append(formattedQuote);
  }
};
displayQuote();

$('#quote').append(quoteButton);

