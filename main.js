console.log("JS file is working!");


$(document).ready(function(){
  var currentQuote = "";
  $("#getQuote").on("click", function(){
    $.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){
        currentQuote = data.message;
        $("#quote").html("\"" + currentQuote + "\"");
    });
    $("#tweetThis").removeClass("hidden");
    $("#tweetThis").on("click", function(){
      var url = "https://twitter.com/intent/tweet?text=" + currentQuote + "";
      console.log(url);
      $(this).attr("href", url);
    });
  });
});
