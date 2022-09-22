let typeCode = [0,1,2,3,4,5,6,7,8,9]
let values = ['1','2','3','4','5','6','7','8'];



class Deck {
    constructor(cards = createDeck()) {
        this._cards = cards;
    }
    get cards () {
        return this._cards;
    }
    set currentCards(newCards) {
        this._cards = newCards;
    }
}

class Card {
    constructor(typeCode, value) {
        this._typeCode = typeCode;
        this._value = value;
    }
    get value () {
        return this._value;
    }
    get typeCode () {
        return this._typeCode;
    }
}

let createDeck = () => {
    return typeCode.flatMap(typeCode => {
        return values.map(value => {
            return new Card(typeCode, value);
        })
    })
}
export default Deck;