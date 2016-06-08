function getRandom(){
    var myQuotes = [{
          quote: "I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want." ,
          author: "Muhammad Ali",
      }, {
          quote: "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
          author: "St. Jerome",
      }, {
          quote: "However difficult life may seem, there is always something you can do and succeed at.",
          author: "Stephen Hawking",
      }, {
          quote: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
          author: "John Quincy Adams",
      }, {
          quote: "I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion.",
          author: "Alexander the Great",
      }, {
          quote: "There is no substitute for hard work.",
          author: "Thomas A. Edison",
      }, {
          quote: "The best preparation for good work tomorrow is to do good work today.",
          author: "Elbert Hubbard",
      }, {
          quote: "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
          author: "Eminem",
      }, {
          quote: "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
          author: "Lyndon B. Johnson",
      }, {
          quote: "I'd rather attempt to do something great and fail than to attempt to do nothing and succeed.",
          author: "Robert H. Schuller",
      }];
      var randomQuote = Math.floor(Math.random() * myQuotes.length);
      $('#replacequote').text(myQuotes[randomQuote].quote); 
      $('#replaceauth').text(myQuotes[randomQuote].author);
  }
$(document).ready(function(){
  $("#getMessage").on("click", function() {
      getRandom();
  });
  $("#tweet-quote").on('click',function(){
    var quote = $('#replacequote').html();
    var author = $('#replaceauth').html();
    var tweet = 'https://twitter.com/intent/tweet?text=' + quote + ' - ' + author;
    $('#tweet-quote').attr('href', tweet);
  });
  getRandom();
});