var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  // Loop over the suits array
  var suitIndex = 0;
  while (suitIndex < suits.length) {
    // Store the current suit in a variable
    var currentSuit = suits[suitIndex];
    var rankCounter = 1;
    while (rankCounter <= 13) {
      var cardName = rankCounter;
      if (cardName == 1) {
        cardName = 'ace';
      } else if (cardName == 11) {
        cardName = 'jack';
      } else if (cardName == 12) {
        cardName = 'queen';
      } else if (cardName == 13) {
        cardName = 'king';
      }
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
      };
      cardDeck.push(card);

      rankCounter += 1;
    }
    suitIndex += 1;
  }
  return cardDeck;
};
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};
// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    var randomIndex = getRandomIndex(cardDeck.length);
    var randomCard = cardDeck[randomIndex];
    var currentCard = cardDeck[currentIndex];
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    currentIndex = currentIndex + 1;
  }
  return cardDeck;
};
// copied code ends above this line.
let deck = makeDeck();
let shuffledDeck = shuffleCards(deck);

//points setup
var pointsystem = function() {
    var playerPoints = 0;
    var computerPoints = 0;
    if (rankCounter >1 && rankCounter <11) {
      var points = rankCounter;
    }
    if (rankCounter = 1) {
      var points = 11
    }
    
    if (rankCounter <14 && rankCounter >10) {
      var points = 10
    }
  }

//game setup
var main = function(input) {
  if (input = 'startGame'){
    

  }
}

function main() {
  let drawCard1 = shuffledDeck.pop();
  let drawCard2 = shuffledDeck.pop();
  console.log(drawCards.name + drawCards.suit + drawCards.rank);
  return 'card1: ' + drawCard1.name + drawCard1.suit + drawCard1.rank +
          'card2: ' + drawCard2.name + drawCard2.suit + drawCard2.rank
}


