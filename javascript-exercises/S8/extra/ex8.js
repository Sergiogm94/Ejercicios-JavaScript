const button$$ = document.querySelector('[data-fn="callACat"]');

const gatete = () => {
fetch("https://api.thecatapi.com/v1/images/search")
.then(res => res.json())
.then(gatos => {
    console.log(gatos);
    gatoAparece(gatos);
})
}

const gatoAparece = (gatos) => {
    const div$$ = document.createElement("div");
    const img$$ = document.createElement("img");
    img$$.setAttribute("src", gatos[0].url);
    div$$.appendChild(img$$);
    const dButton$$ = document.createElement("button");
    dButton$$.textContent = "Eliminar";
    div$$.appendChild(dButton$$);
    document.body.appendChild(div$$);
    dButton$$.addEventListener("click", () => {fueraGato(div$$)});
}

button$$.addEventListener("click", gatete);


const fueraGato = (div$$) =>{
    div$$.remove();
}
