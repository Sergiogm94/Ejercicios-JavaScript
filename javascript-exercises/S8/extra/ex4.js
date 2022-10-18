const planets$$ = document.querySelector('[data-function="planets"]');
const search$$ = document.querySelector('[data-function="search"]');
const characters$$ = document.querySelector('[data-function="characters"]');

fetch(`http://localhost:3000/planets`)
.then(res => res.json())
.then(resToJson =>{
    console.log(resToJson);
    listaPlanetas(resToJson);
})

const listaPlanetas = (planets) =>{
    for (const planet of planets) {
        const div$$ = document.createElement("div");
        const img$$ = document.createElement("img");
        img$$.setAttribute("src", planet.image);
        img$$.setAttribute("width", 300);
        const h2$$ = document.createElement("h2");
        h2$$.textContent = planet.name;
        div$$.appendChild(img$$);
        div$$.appendChild(h2$$);
        planets$$.appendChild(div$$)
        div$$.addEventListener("click", () => personajeAparece(planet.id))
    }
}

const personajeAparece = (idPlanet) => {
    fetch('http://localhost:3000/characters?idPlanet=' + idPlanet)
    .then(res => res.json())
    .then(resToJson =>{
        console.log(resToJson);
        listaPersonajes(resToJson);
    })
}

const listaPersonajes = (personajes) =>{
    for (const personaje of personajes) {
        const div2$$ = document.createElement("div");
        div2$$.innerHTML = `<img src="${personaje.avatar}"/><h2>${personaje.name}</h2>`
        div2$$.appendChild(characters$$);
        
    }

}