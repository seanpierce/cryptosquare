$(document).ready(function(){

  $("form").submit(function(e) {

    e.preventDefault();

    // collect input from user
    var input = $("form input").val();
    // check to see if user entered any input into the field
    if (!input) {
      $(".warning").show();
    } else {
      $(".warning").hide();
    }
    // remove spaces, and special chars
    modifiedInput = input.replace(/ /g,"");
    // remove all special chars
    modifiedInput = modifiedInput.replace(/[^\w\s]/gi, '');
    // downcase all chars in input string
    modifiedInput = modifiedInput.toLowerCase();
    var message = modifiedInput.split("");
    var messageLength = message.length;

    // declare global arrays
    var scramWord = [];
    var scramMessage = [];

    // write some math to determine next largest square root
    var root = Math.sqrt(messageLength);
    var roundRoot = Math.ceil(root);
    console.log(roundRoot); // roundRoot is the magic number!

    // create function to loop through a single column, concatenating a "word" from the letters within
    var writeColumn = function(i) {
      var count = 1;
      while (count <= roundRoot) {
        var letter = message[i];
        scramWord.push(letter);
        i = i + roundRoot;
        count++;
      }
      return scramWord.join("");
    }

    // loop through each vitual "column" and push each "word" to an array
    for (var i = 0; i < roundRoot; i++) {
      scramMessage.push(writeColumn(i));
    }

    // the scramMessage array contains multiple items composed of each "step" through the previous loop...
    // we want to collect only the final item in the scramMessage array
    var lastMessage = scramMessage.length - 1;
    var encodedMessage = scramMessage[lastMessage].split("");
    var encodedLength = encodedMessage.length;

    // loop through encoded message and splice a space in every after 5 chars
    var n = 5;
    while (n <= (encodedLength + 5)) {
      encodedMessage.splice(n, 0, " ");
      n = n + 6;
    }

    // write result to page
    $("#initial-input").text('"' + input + '" becomes:');
    $("#encoded-message").text(encodedMessage.join(""));
  });
});

// dev's notes: I have not successfully sepparated the buisiness logic and UI logic for this project.
// Everytime I try to sepparate the two, I start receiving unsolveable console errors.
// Sometime soon I'd like to achive this sepparation

// end
