const FRONT = "card-front";
const BACK = "card-back";

let techs = ['bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'];

createCardsFromTechs(techs);
insertCardOnGameBoard(cards2);
var cards2;
function createCardsFromTechs(techs) {

    let cards = [];

    for (let tech of techs) {
        cards.push(createPairFromTech(tech));
    }


    cards2 = cards.flatMap(pair => pair);
    console.log(cards2);
}

function createPairFromTech(tech) {

    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false
    },
    {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false
    }]

}

function createIdWithTech(tech) {

    return tech + parseInt(Math.random() * 1000);

}

function insertCardOnGameBoard(cards2) {

    let gameBoard = document.getElementById("gameBoard");

    for (let card2 of cards2) {
        cards2.forEach((card2) => {

                gameBoard.innerHTML = ` <div id=${card2.id} class="card" data-icon="bootstrap">
                                    <div class=${FRONT}>
                                        <img class="icon" src="./assets/${card2.icon}.png" alt="bootstrap-logo">
                                    </div>
                                    <div class=${BACK}>
                                        &lt/&gt
                                    </div>
                                </div>`;
            });
    }
}