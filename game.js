var score = 1; // Create a variable to store the score in

var title = new Title('Escape from police!!'); // Create a title element
var button = new Button('steal', btnPress);   // Create a button element
var hidden = new Button('Rob!', btnPress);
hidden.hide();
var hidden2 = new Button('dealing arms', btnPress);
hidden2.hide();

var hidden3 = new Button('Thieves have enough money to buy the police! WOOO!!')
hidden3.hide();
var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score




  if(score > 10) {
    hidden.show();
  }

  if(score > 40) {
    hidden2.show();
  }

  if(score > 40) {
    hidden.hide();
  }

  if(score > 100) {
    hidden2.hide();
  }

  if(score > 10) {
    button.hide();
  }


  if(score > 100) {
    scr.hide();
  }

  if(score > 100) {
    hidden3.show();
  }


}
