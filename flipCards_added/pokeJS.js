var card = document.querySelector(".card")
card.addEventListener("click", function() {
  card.classList.toggle("is-flipped")
})

//great, compact function for fetching json!!!
async function getAPIData(url) {
  try {
    const response = await fetch(url) //fetch only gets urls!
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const theData = getAPIData("https://pokeapi.co/api/v2/pokemon/").then(data => {
  for (const pokemon of data.results) {
    getAPIData(pokemon.url).then(pokedata => {
      populateDOM(pokedata)
    })
  }
})

let mainArea = document.querySelector("main")

function populateDOM(eachPokemon) {
  let pokeScene = document.createElement("div")
  let pokeCard = document.createElement("div")
  let pokeFront = document.createElement("div")
  let pokeBack = document.createElement("div")

  pokeScene.setAttribute("class", "scene")
  pokeCard.setAttribute("class", "card")
  
  makeCardFront(pokeFront, eachPokemon)
  makeCardBack(pokeBack, eachPokemon)

  pokeCard.appendChild(pokeFront)
  pokeCard.appendChild(pokeBack)
  pokeScene.appendChild(pokeCard)



  mainArea.appendChild(pokeCard)

  pokeCard.addEventListener("click", function() {
    pokeCard.classList.toggle("is-flipped")
  })

}




function makeCardFront(pokeFront, eachPokemon) {

  pokeFront.getElementsByClassName("card__face--front")
  
  let pokePic = document.createElement("img")
  let pokeName = document.createElement("h1")
  let pokeType = document.createElement("p")



  pokeName.textContent = eachPokemon.name
  pokeType.textContent = eachPokemon.type

  let pokeNum = getPokePic(eachPokemon.id)

  pokePic.src = "../pokemon_json_files/images/${pokeNum}.png"

  pokeFront.appendChild(pokePic)
  pokeFront.appendChild(pokeName)
  pokeFront.appendChild(pokeType)

}


function makeCardBack(pokeBack, eachPokemon) {
  pokeBack = document.getElementsByClassName("card__face--back")

  let pokeSprite = document.createElement("img")

  let pokeNum = getPokePic(eachPokemon.id)

  pokeSprite.src = "../pokemon_json_files/sprites/${pokeNum}MS.png"
  
  pokeBack.appendChild(pokeSprite)

}


function getPokePic(pokeID) {
  if (pokeID < 1 || pokeID > 964) {
    return "Not a valid pokemon number!"
  } else if (pokeID > 0 && pokeID < 10) {
    return "00${pokeID}"
  } else if (pokeID > 9 && pokeID > 100) {
    return "0${pokeID}"
  } else {
    return pokeID
  }
}


document.write(5 + 6)