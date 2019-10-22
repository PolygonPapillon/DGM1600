import { films } from './sourceJS/films.js.js'
import { people } from './sourceJS/people.js.js'
import { planets } from './sourceJS/planets.js.js'
import { species } from './sourceJS/species.js.js'
import { starships } from './sourceJS/starships.js.js'
import { vehicles } from './sourceJS/vehicles.js.js'

let mainArea = document.querySelector("main")

films.forEach(function(film) {
    let filmDiv =document.createElement("div")
    let filmTitle =document.createElement("h1")
    let filmCrawl =document.createElement("p")

    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    mainArea.appendChild(filmDiv)
});

people.forEach(function(person) {
    let personDiv = document.createElement("div")
    let name = document.createElement("h1")
    let gender = document.createElement("h3")
    let pic = document.createElement("img")

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = "https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg"

    mainArea.appendChild(personDiv)


});

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}