import { films } from './sourceJS/films.js.js'
import { people } from './sourceJS/people.js.js'
import { planets } from './sourceJS/planets.js.js'
import { species } from './sourceJS/species.js.js'
import { starships } from './sourceJS/starships.js.js'
import { vehicles } from './sourceJS/vehicles.js.js'

let mainArea = document.querySelector("main")

starships.forEach(function(starships) {
    let shipDiv = document.createElement("div")
    let name = document.createElement("h1")
    let model = document.createElement("h3")
    let pic = document.createElement("img")

    shipDiv.appendChild(name)
    shipDiv.appendChild(model)
    

    

    name.textContent = starships.name
    model.textContent = starships.model

    let webNum = getWebNumber(starships.url)
    pic.src = `https://starwars-visualguide.com/assets/img/starships/${webNum}.jpg`
    
    /* function imgError(image) {
        image.onerror = "";
        image.src = "/images/brokenImageReplacer.png";
        return true;
    }
    
    imgError(pic) */

    /* function testImage(URL) {
        var tester=new Image();
        if (tester.onload=imageFound) {
            return;
        } else {
            URL = "/images/brokenImageReplacer.png"
            return;
        }
    }
    testImage(pic.src) */
    shipDiv.appendChild(pic)

    mainArea.appendChild(shipDiv)


});

function getWebNumber(webURL) {
    let end = webURL.lastIndexOf('/')
    let webID = webURL.substring(end -2, end)
    if (webID.indexOf('/') !== -1 ) {
        return webID.slice(1,2)
    } else {
        console.log(webID)
        return webID
    }
}