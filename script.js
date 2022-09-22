import Deck from "./deck.js";

let colors = ['#0557BD', '#F3C615', '#FF7CB3', '#BDBFBE', '#6F3599', '#FA771F', '#67381C', '#E72035', '#7FC735', '#365941'];
let species = ['Blue Spruce', 'Cassia', 'Cherry Blossom', 'Dogwood', 'Jacaranda', 'Maple', 'Oak', 'Royal Poinciana', 'Tulip Poplar', 'Willow']

let deck = new Deck();

let pickRandom = (deck, number) =>
{
    let randInt = Math.floor(Math.random() * number - 1);
    return (deck.cards[randInt]);
}
let changeCardButton = document.getElementById('generate-button');
changeCardButton.onclick = function(){changeCardNumber()};
let changeCardNumber = () =>
{
    let randomCard = (pickRandom(deck, deck.cards.length))
    console.log(randomCard);
    let cardDisplay = document.getElementsByClassName('values');
    for (let i = 0; i < cardDisplay.length; i++)
    {
        cardDisplay[i].innerHTML = randomCard.value;
    }
    let iconTopLeft = document.getElementById('card-icon-top-left');
    let iconTopRight = document.getElementById('card-icon-top-right');
    let iconBottomLeft =  document.getElementById('card-icon-bottom-left');
    let iconBottomRight = document.getElementById('card-icon-bottom-right');
    document.getElementById('species-name').innerHTML = species[randomCard.typeCode]
    document.getElementById('species-image').src = `./trees/${species[randomCard.typeCode]}.svg`;
    let iconDisplay = document.getElementsByClassName('icon');
    for (let i = 0; i < iconDisplay.length; i++) {
        iconDisplay[i].src = `./icons/${species[randomCard.typeCode]}.svg`;
    }
    let flourishDisplay = document.getElementsByClassName('flourishes');
    for (let i = 0; i < flourishDisplay.length; i++){
        flourishDisplay[i].src = `./flourish/${species[randomCard.typeCode]}.svg`
    }
}