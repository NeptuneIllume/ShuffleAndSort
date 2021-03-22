let cardsContainer = document.getElementById('cards');
let cards = [{
  key: 1,
  text: '1',
  color: 'lightBlue'
}, {
  key: 2,
  text: '2',
  color: 'mediumBlue'
}, {
  key: 3,
  text: '3',
  color: 'darkBlue'
}, {
  key: 4,
  text: '4',
  color: 'mediumBlue'
}, {
  key: 5,
  text: '5',
  color: 'darkBlue'
}, {
  key: 6,
  text: '6',
  color: 'grey'
}, {
  key: 7,
  text: '7',
  color: 'grey'
}, {
  key: 8,
  text: '8',
  color: 'lightBlue'
}, {
  key: 9,
  text: '9',
  color: 'darkBlue'
}];

window.onload = (event) => {
  displayCards(cards);
}

function shuffle() {
  // Shuffles cards array in place and also runs render function
  for(let i = cards.length; i > 0; i--) {
    cards.push(cards.splice(Math.floor(Math.random() * i), 1)[0]);
  }
  displayCards(cards);
}

function sort() {
  // Sorts cards array in place and also runs render function
  cards.sort((a, b) => (a.key > b.key) ? 1 : -1);
  displayCards(cards);
}

function displayCards(cards) {
  // Checks for and removes existing child nodes in cardsContainer div
  if(cardsContainer.hasChildNodes) {
    while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
    }
  }
  // Adds card divs from cards array to cardsContainer div as child nodes
  cards = cards.map(card => {
    let cardDiv = document.createElement('div');
    cardDiv.innerHTML = card.text;
    cardDiv.className = card.color;
    cardsContainer.appendChild(cardDiv);
  });
}