fetch('https://breakingbadapi.com/api/characters')
  .then(response => 
    response.json()
  )
  .then(myJson =>
    personajes(myJson)
  );

  const personajes = (personaje) => {
    for (const pers of personaje) {
        const div$$ = document.createElement("div");
        const p$$ = document.createElement("p");
        const img$$ = document.createElement("img");
        p$$.textContent = pers.name;
        img$$.setAttribute("src", pers.img);

        div$$.appendChild(p$$);
        div$$.appendChild(img$$);
        document.body.appendChild(div$$);
    }
}

/*
fetch ('https://breakingbadapi.com/api/characters')
.then((response) =>{
    return response.json()
})
.then((myJson) => {
    console.log(myJson)
    brCharacters(myJson)
    return myJson;
})
const brCharacters = (characters) =>{
    for (const character of characters) {
        const figure$$ = document.createElement('figure')
        figure$$.innerHTML = '<img src="'+character.img+'" alt=""><figcaption>'+character.name+'</figcaption>'
        document.body.appendChild(figure$$)
    }
} 
*/
