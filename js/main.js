
//arrays to hold the cards
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
      rank: "king",
      suit: "hearts",
      cardImage: "images/king-of-hearts.png"

  },
  {
      rank: "king",
      suit: "diamonds",
      cardImage: "images/king-of-diamonds.png"
  }

];
var cardsInPlay = [];

var checkForMatch = function()
{
  if(cardsInPlay[0]==cardsInPlay[1])
    alert("You found a match!");
  else
    alert("Sorry, try again.");

};

var flipCard = function(cardId)
{
  console.log("User flipped " + cards[cardId].rank);
  console.log("User flipped " + cards[cardId].suit);
  console.log("User flipped " + cards[cardId].cardImage);


  //here we add the card flipped to the cards in play
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();

};

flipCard(0);
flipCard(2);


//the first card flipped

//
//console.log("User flipped " + cardOne);

//console.log("User flipped " + cardTwo);
