import {pokemonArray} from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container")

//function needed that renders card to the page


const renderCard =(pokemonArrayObject) =>{

    return `<div class="card">
    <img src=${pokemonArrayObject.sprite}/>
    <div class="card__content">
        <h1 class="card__heading">${pokemonArrayObject.name}</h1>
        <p class="card__text">${pokemonArrayObject.types.join(", ")} </p>
    </div>
    </div>`
}



pokemonArray.forEach((pokemonId) => {
    cardContainer.innerHTML += renderCard(pokemonId)
})