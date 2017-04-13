var currentQ='';
var currentA='';

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');}

$(document).ready(function() {


  $("#getQuote").on("click", function(){ 

    $.getJSON('https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/quotes/random.json', function(json) {
      currentQ=json.quote;
      currentA=json.author;

      $(".box").html('<i class="fa fa-quote-left" aria-hidden="true"></i> '+json.quote+' <i class="fa fa-quote-right" aria-hidden="true"></i>'+'<br>' +'~'+'<br>' +json.author);
    }, 1000);

  });


  $("#twitQuote").on("click", function(){ 
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQ + '" ' + currentQ));

  });

});