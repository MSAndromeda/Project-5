console.clear();
document.addEventListener('DOMContentLoaded', () => {

    // Card options
    const cardArray = [{
            Name: 'fries',
            img: 'Images/fries.png',
        },
        {
            Name: 'fries',
            img: 'Images/fries.png',
        },
        {
            Name: 'Burger',
            img: 'Images/Burger.png',
        },
        {
            Name: 'Burger',
            img: 'Images/Burger.png',
        },
        {
            Name: 'hotdog',
            img: 'Images/hotdog.png',
        },
        {
            Name: 'hotdog',
            img: 'Images/hotdog.png',
        },
        {
            Name: 'ice-cream',
            img: 'Images/ice-cream.png',
        },
        {
            Name: 'ice-cream',
            img: 'Images/ice-cream.png',
        },
        {
            Name: 'milkshake',
            img: 'Images/milkshake.png',
        },
        {
            Name: 'milkshake',
            img: 'Images/milkshake.png',
        },
        {
            Name: 'pizza',
            img: 'Images/pizza.png',
        },
        {
            Name: 'pizza',
            img: 'Images/pizza.png',
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());

    // selecting the div containing flex class
    const grid = document.querySelector('.flex');
    const resultDisplay = document.querySelector('#result');
    let cardChosen = [];
    let cardChosenId = [];
    let cardsWon = [];

    // create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'Images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // check for match
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardChosenId[0];
        const optionTwoId = cardChosenId[1];

        if (optionOneId == optionTwoId) {
            // alert("You Have Clicked The Same Card again");
            cards[optionOneId].setAttribute('src', 'Images/blank.png');
            cards[optionTwoId].setAttribute('src', 'Images/blank.png');
        } else if (cardChosen[0] === cardChosen[1]) {
            cards[optionOneId].setAttribute('src', 'Images/white.png');
            cards[optionTwoId].setAttribute('src', 'Images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'Images/blank.png');
            cards[optionTwoId].setAttribute('src', 'Images/blank.png');
            // alert("Sorry Try Again");
        }
        cardChosen = [];
        cardChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them All!';
        }
    }


    // Flip the card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardId].Name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
});