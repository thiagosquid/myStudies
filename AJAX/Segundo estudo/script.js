let xhr = new XMLHttpRequest();
let deck;
let newDeckButton = document.getElementById('selectDeck');
let takeCardButton = document.getElementById('takeCard');
let cardImage;
let initCards;
let showCards = document.getElementById('takedCard');

newDeckButton.addEventListener('click',shuffleDeck);
takeCardButton.addEventListener('click', takeCard)



function shuffleDeck(){
xhr.open('GET', 'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    xhr.onprogress = function(){
        // console.log('Carregando');
    }

    xhr.onload = function(){
        deck = JSON.parse(xhr.response);
        // console.log(deck)
        printDeckId();
    }
xhr.send();
}

function printDeckId(){
    document.getElementById('deckId').innerHTML = `Deck ID: ${deck.deck_id}
Cards Amount: ${deck.remaining}`;
}

function takeCard(){
    let id = deck.deck_id;
    
    let req = `http://deckofcardsapi.com/api/deck/${id}/draw/?count=3`;
    xhr.open('GET', req);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function(){
        initCards = JSON.parse(xhr.response);
        console.log(initCards.cards.length);
        cardImage = initCards.cards[0].image;
            for(let i = 0; i < initCards.cards.length; i++){
                printInitCard(initCards.cards[i].image);
            }


        // printCard(cardImage);
    }     
xhr.send();
}

// function printCard(img){
//     document.getElementById('takedCard').setAttribute('src',img);
// }

function printInitCard(img){
    let initCDiv = document.createElement('img');
    initCDiv.src = img;
    showCards.appendChild(initCDiv);
}

