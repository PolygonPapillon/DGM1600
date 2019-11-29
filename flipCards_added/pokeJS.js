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

const theData = getAPIData("https://pokeapi.co/api/v2/pokemon/")
.then(data => {
  for (const pokemon of data.results) {
    getAPIData(pokemon.url).then(pokedata => {
      populateDOM(pokedata)
    })
  }
})

let mainArea = document.querySelector("main")

function populateDOM(eachPokemon) {
  
    let pokeDiv = document.createElement("div")
    let pokePic = document.createElement("img")
    let pokeName = document.createElement("h1")
    let pokeType = document.createElement("p")

    pokeName.textContent = eachPokemon.name
    pokeType.textContent = eachPokemon.type

    let pokeNum = getPokePic(eachPokemon.id)

    pokePic.src = "../../pokemon_json_files/${pokeNum}.png"

    pokeDiv.appendChild(pokePic)
    pokeDiv.appendChild(pokeName)
    pokeDiv.appendChild(pokeType)

    mainArea.appendChild(pokeDiv)
  }

function getPokePic(pokeID) {
  if (pokeID < 1 || pokeID > 964) {
    return "Not a valid pokemon number!"
  } else if (pokeID > 0 && pokeID < 10) {
    return "00${pokeID}"
  } else if (pokeID > 9 && pokeID >100) {
    return "0${pokeID}"
  } else {
    return pokeID
  }
}
