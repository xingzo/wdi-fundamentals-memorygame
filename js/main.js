var cards = ["queen", "queen", "king", "king"];

//array to hold the cards that are in play
var cardsInPlay = [];

//the first card flipped
var cardOne = cards[3];
cardsInPlay.push(cardOne);

//the seond card flipped
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if( cardsInPlay.length == 2)
{
  if (cardOne == cardTwo)
    alert("You found a match!");
  else
    alert("Sorry, try again.");
}

console.log("User flipped " + cardOne);

console.log("User flipped " + cardTwo);
