
//arrays to hold the cards
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function()
{
  if(cardsInPlay[0]==cardsInPlay[1])
    console.log("You found a match!");
  else
    console.log("Sorry, try again.");




};

var flipCard = function(cardId)
{
  console.log("User flipped " + cards[cardId]);

  //here we add the card flipped to the cards in play
  cardsInPlay.push(cards[cardId]);
  checkForMatch();


  //if( cardsInPlay.length == 2)
  //{
  //  if (cardOne == cardTwo)
  //    alert("You found a match!");
  //  else
  //    alert("Sorry, try again.");
  //}

};

flipCard(0);
flipCard(2);


//the first card flipped

//
//console.log("User flipped " + cardOne);

//console.log("User flipped " + cardTwo);
