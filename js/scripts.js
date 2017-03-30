$(document).ready(function(){

  var input = "sowmyaisastudentatepicodus";
  var message = input.split("");
  var messageLength = message.length;
  var scramMessage = [];
  // write some math to determine next largest square root
  var root = Math.sqrt(messageLength);
  var roundRoot = Math.ceil(root);
  console.log(roundRoot);
  // roundRoot is our number of cols and rows

  var writeColumn = function(i) {
    // var i = 0;
    var count = 1;
    while (count <= roundRoot) {
      var letter = message[i];
      scramMessage.push(letter);
      i = i + roundRoot;
      count++;
    }
    scramMessage.push(" ");
    return scramMessage.join("");
  }

  for(var i = 0; i < roundRoot; i++){
    console.log(writeColumn(i));
  }
  // funcLoop = 1
  // i = 0;
  // while (funcLoop <= roundRoot) {
  //   alert(writeColumn());
  //   i++
  //   funcLoop++;
  // }








});
