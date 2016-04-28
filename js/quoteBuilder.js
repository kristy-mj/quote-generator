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
      "quote": "In three words I can sum up everything I've learned about life: it goes on.",
      "author": "Robert Frost"  
    },
    {
      "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      "author": "Mahatma Gandhi"
    },
    {
      "quote": "If you tell the truth, you don't have to remember anything.",
      "author": "Mark Twain"
    },
    {
      "quote": "A friend is someone who knows all about you and still loves you.",
      "author": "Elbert Hubbard"
    },
    {
      "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
      "author": "Oscar Wilde"
    },
    {
      "quote": "Even if you’re on the right track, you’ll get run over if you just sit there.",
      "author": "Will Rogers"
    },
    {
      "quote": "In the presence of nature, a wild delight runs through the man, in spite of real sorrows.",
      "author": "Ralph Waldo Emerson"
    },
    {
      "quote": "The earth has music for those who listen.",
      "author": "William Shakespeare"
    }
  ],
};


function displayQuote(){
  for (quotes in randomQuote) {
    $("#quote").html(HTMLquote);
    
  var generateIndex = Math.floor(randomQuote.quotes.length * Math.random());
  
  var grabQuote = randomQuote.quotes[generateIndex].quote;
      var formatQuote = HTMLquoteContent.replace("%data%", grabQuote);
      $(".quote-entry").append(formatQuote);
  
  var grabAuthor = randomQuote.quotes[generateIndex].author;
      var formatAuthor = HTMLquoteAuthor.replace("%data%", grabAuthor);
      $(".quote-entry").append(formatAuthor);
  }
};
displayQuote();


$("#new-quote").on("click", function(event) {
  displayQuote();
});

var tweetQuote = document.querySelector("#quote .quote-entry .show-quote").innerHTML
var tweetAuthor = document.querySelector("#quote .quote-entry .show-author").innerHTML
$('.twitter-share-button').attr('href', "https://twitter.com/intent/tweet?text=" + tweetQuote + " - " + tweetAuthor);
