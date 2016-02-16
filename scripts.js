// Arrays of Quotes
var paulQuotes = ["In the end, the love you take is equal to the love you make.", "I used to think anyone doing anything weird was weird. Now I know that it is the people that call others weird that are weird.", "You can judge a man's true character by the way he treats his fellow animals.", "If slaughterhouses had glass walls, everyone would be a vegetarian.", "Somebody said to me, 'But the Beatles were anti-materialistic.' That's a huge myth. John and I literally used to sit down and say, 'Now, let's write a swimming pool.", "I don't work at being ordinary.", "I am alive and well and unconcerned about the rumors of my death. But if I were dead, I would be the last to know.", "Think globally, act locally.", "And what's the point of changing when I'm happy as I am?", "Animation is not just for children - it's also for adults who take drugs."]
var johnQuotes = ["Count your age by friends, not years. Count your life by smiles, not tears.", "I believe in everything until it's disproved. So I believe in fairies, the myths, dragons. It all exists, even if it's in your mind. Who's to say that dreams and nightmares aren't as real as the here and now?", "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.", "As usual, there is a great woman behind every idiot.", "The more I see, the less I know for sure.", "A dream you dream alone is only a dream. A dream you dream together is reality.", "One thing you can't hide - is when you're crippled inside.", "If everyone demanded peace instead of another television set, then there'd be peace."];
var georgeQuotes = ["I think people who truly can live a life in music are telling the world, ‘You can have my love, you can have my smiles. Forget the bad parts, you don’t need them. Just take the music, the goodness, because it’s the very best, and it’s the part I give most willingly", "I was naive and thought we could express our feelings to each other- not suppress them and keep holding them back. Well, it was what I felt, and why should I be untrue to myself? I came to believe the importance that if you feel something strong enough then you should say it.", "All the world is birthday cake, so take a piece, but not too much.", "Try to realize it's all within yourself no one else can make you change, and to see you're only very small and life flows on within you and without you.", "When you've seen beyond yourself, then you may find, peace of mind is waiting there.", "With our love, we could save the world.", "As long as you hate, there will be people to hate."];
var ringoQuotes = ["I've never really done anything to create what has happened. It creates itself. I'm here because it happened. But I didn't do anything to make it happen apart from saying 'Yes.'", "People only look at me as a Beatle, but my friends look at me as a whole person. That's how life works, but it's not bugging me anymore.", "I was the new boy. It was like joining a new class at school where everybody knows everybody else but me.", "I've got blisters on me fingers!", "The Beatles were just four guys that loved each other. That's all they'll ever be.", "In the band I was in, we knew when we’d done the take, because it just feels good. It’s like golf. When you hit that ball right, you know. You feel it – you feel the connection. And connecting is good.", "I think the most exciting thing is that you expect people our age to know the music, but actually a lot of kids know the music, and if anything is left, we have left really good music. And that`s the important part, not the mop-tops or whatever."];

$(document).ready(function() {    // start ready
  // Hover functions
  var imageUrl = "";
  $('button').hover(function() {
    imageUrl = $(this).css("background");
    $(this).css("background", "linear-gradient(0deg, #000, transparent 90%), " + imageUrl);
    $(this).html("<p>" + $(this).data("member") + "</p>");    //adds member name 
  }, function() {
    $(this).css("background", imageUrl);
    $(this).html("");
  });
  
  // generate quote when button is clicked
  $('button').click(function() {
    // get author data
    var author = $(this).data("member");
    // show overlay
    $('.overlay').show();
    $('#quote-text').show();
    
    //initialize array variable
    var arr= [];
    //get author's respective array
    switch (author) {
    case "Paul McCartney":
      arr = paulQuotes;
      break;
    case "John Lennon":
      arr = johnQuotes;
      break;
    case "George Harrison":
      arr = georgeQuotes;
      break;
    case "Ringo Starr":
      arr = ringoQuotes;
      break;
  }
    
    //Randomly choose quote
  quote = arr[Math.floor(Math.random() * arr.length)];
  
  //Need to change ' to %27 for twitter
  var tweetQuote = quote.replace(/\'/g, "%27");
      
  //display quote and twitter button in div
  $('#quote-text').html("<h1>\"" + quote + "\"</h1><i><h2>-" + author + "</h2></i>" + "<a href='https://twitter.com/intent/tweet?text=\"" + tweetQuote + "\" - " + author + "'><button class='tweet'><i class='fa fa-twitter'></i>Tweet it!</button></a>");
  
  // when overlay is clicked, hide
  $('.overlay').on("click", function() {
    $('.overlay').hide();
    $('#quote-text').hide();
  });
 });
}); // end ready