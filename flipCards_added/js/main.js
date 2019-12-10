import { films } from "./sourceJS/films.js";
import { people } from "./sourceJS/people.js";
import { planets } from "./sourceJS/planets.js";
import { species } from "./sourceJS/species.js";
import { starships } from "./sourceJS/starships.js";
import { vehicles } from "./sourceJS/vehicles.js";

let mainArea = document.querySelector("main");

/* function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");

    style1.onclick = swapStyleSheet("default.css");
    style2.onclick = swapStyleSheet("dark.css");
} */

/* function createButton() {
    var element = document.createElement("button");
    element.appendChild(document.createTextNode("Click Me!"));
    var page = document.getElementById("btn");
    page.appendChild(element);
  
    console.log(element);
  }
  
  //createButton();

var toggleTheme = function(themeName) {
    var stylesheets = document.styleSheets;
    var length = stylesheets.length;
    var i;
  
    for(i = 0; i < length; i++) {
      var ss = stylesheet[i];
      ss.disabled = (ss.href.indexOf(themeName) !== -1) ? false : true;
    }
  }; */

//mainArea.appendChild(styleToggle)

films.forEach(function(film) {
    let filmDiv = document.createElement("div")
    let filmTitle = document.createElement("h1")
    let filmCrawl = document.createElement("p")

    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    mainArea.appendChild(filmDiv)
});

people.forEach(function(person) {
  let personDiv = document.createElement("div");
  let name = document.createElement("h1");
  //let homeworld = document.createElement("h3")
  let pic = document.createElement("img");

  name.textContent = person.name;

  //let webNum = getWebNumber(person.homeworld)
  //homeworld.textContent = person.homeworld

  let webNum = getWebNumber(person.url);
  pic.src = `https://starwars-visualguide.com/assets/img/characters/${webNum}.jpg`;

  personDiv.appendChild(name);
  //personDiv.appendChild(homeworld)
  personDiv.appendChild(pic);

  mainArea.appendChild(personDiv);
});

function getWebNumber(webURL) {
  let end = webURL.lastIndexOf("/");
  let webID = webURL.substring(end - 2, end);
  if (webID.indexOf("/") !== -1) {
    return webID.slice(1, 2);
  } else {
    console.log(webID);
    return webID;
  }
}
