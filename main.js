console.log("JS file is working!");

var currentQuote = $('#quote').text();

function generateQuote(){
  $.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){
      currentQuote = data.message;
      $("#quote").html("\"" + currentQuote + "\"");
      tweetQuote();
  });
}

function tweetQuote (){
  $("#tweetThis").on("click", function(event){
    var url = 'https://twitter.com/share?text=' +
      encodeURIComponent(currentQuote);
    console.log(url);
    $(this).attr({
      "href": url,
      "text": currentQuote
    });
  });
}

$(document).ready(function(){
  generateQuote();
  $("#getQuote").on("click", function(){
    generateQuote();
  });
});
