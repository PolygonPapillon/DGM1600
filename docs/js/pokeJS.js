let requestURL =
  "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  let pokedata = request.response;
  //console.log(pokedata);

  populateDOM(pokedata);
};

let cardArea = document.querySelector(".cardsHere");

// call the 1st 30 pokemon
function populateDOM(allPokemon) {
  for (let i = 0; i < 30; i++) {
    makeCard(allPokemon, i);
  }
}

  function makeCard(pokemon, iCount) {
    let pokeScene = document.createElement("section");
    let pokeCard = document.createElement("article");
    let pokeFront = document.createElement("div");
    let pokeBack = document.createElement("div");

    pokeScene.setAttribute("class", "scene");
    pokeCard.setAttribute("class", "card");
    pokeFront.setAttribute("class", "card__face card__face--front");
    pokeBack.setAttribute("class", "card__face card__face--back");

    makeCardFront(pokeFront, pokemon, iCount);
    makeCardBack(pokeBack, pokemon, iCount);

    pokeCard.appendChild(pokeFront);
    pokeCard.appendChild(pokeBack);

    pokeScene.appendChild(pokeCard);

    cardArea.appendChild(pokeScene);

    pokeCard.addEventListener("click", function() {
      pokeCard.classList.toggle("is-flipped");
    });
  }


function makeCardFront(pokeFront, aPokemon, arrayCount) {
  let pokePic = document.createElement("img");
  let pokeName = document.createElement("h1");
  let pokeHP = document.createElement("p");

  pokePic.setAttribute("class", "bigPic");

  pokeName.textContent = aPokemon[arrayCount].name.english;
  pokeHP.textContent =
    "HP for this Pokemon is: " + aPokemon[arrayCount].base.HP;

  let pokeNum = getPokePic(aPokemon[arrayCount].id);

  pokePic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`;

  pokeFront.appendChild(pokePic);
  pokeFront.appendChild(pokeName);
  pokeFront.appendChild(pokeHP);
}

function makeCardBack(pokeBack, aPokemon, arrayCount) {
  let pokeSprite = document.createElement("img");
  let pokeType = document.createElement("h2");
  let typeList = document.createElement("ul");
  let otherNames = document.createElement("h2");
  let frenchName = document.createElement("p");
  let japaneseName = document.createElement("p");

  // pokemon sprite
  let pokeNum = getPokePic(aPokemon[arrayCount].id);
  pokeSprite.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/${pokeNum}MS.png`;
  pokeBack.appendChild(pokeSprite);

  pokeType.textContent = "Type(s):";
  pokeBack.appendChild(pokeType);

  // listing the type(s) of each pokemon
  for (let j = 0; j < aPokemon[arrayCount].type.length; j++) {
    let listItem = document.createElement("li");
    listItem.textContent = aPokemon[arrayCount].type[j];
    typeList.appendChild(listItem);
  }
  pokeBack.appendChild(typeList);

  otherNames.textContent = aPokemon[arrayCount].name.english + "'s name in";
  frenchName.textContent = "French is:     " + aPokemon[arrayCount].name.french;
  japaneseName.textContent =
    "Japanese is:     " + aPokemon[arrayCount].name.japanese;

  pokeBack.appendChild(otherNames);
  pokeBack.appendChild(frenchName);
  pokeBack.appendChild(japaneseName);
}

function getPokePic(pokeID) {
  if (pokeID < 1 || pokeID > 809) {
    return "Not a valid pokemon number!";
  } else if (pokeID > 0 && pokeID < 10) {
    return `00${pokeID}`;
  } else if (pokeID > 9 && pokeID < 100) {
    return `0${pokeID}`;
  } else {
    return pokeID;
  }
}

document.querySelector(".anotha").addEventListener("click", () => {
  const aPokeNumber = Number(
    window.prompt(
      "Type the number of a Pokemon you wish to see on a card (1-809)",
      ""
    )
  );
  if (aPokeNumber < 0 || aPokeNumber > 809) {
    alert("That Pokemon does not exist. Please enter a different one.");
    return
  } else {
  let requestURL =
    "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json";
  let request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  request.onload = function() {
    let pokedata = request.response;
    let arrayCount = aPokeNumber - 1;
    makeCard(pokedata, arrayCount);
  };}
});
