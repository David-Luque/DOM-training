class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    //if(arguments.length === 0){return undefined}

    var currentIndex = this.cards.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
    return this.cards;
  }
  
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  isFinished() {
    if(this.pairsGuessed === 12){
      return true
    } else {
      return false
    }
  }
}