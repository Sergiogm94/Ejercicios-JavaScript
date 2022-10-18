fetch('https://ghibliapi.herokuapp.com/films')
.then(res => res.json())
.then(myJson =>{
    console.log(myJson);
    animesGhibli(myJson);
}
)

const animesGhibli = (animes) => {
    const container$$ = document.createElement("div");
    container$$.className = "b-gallery";

    for (const anime of animes) {
    const div$$ = document.createElement("div");
    div$$.className = "b-gallery_item";
    const h2$$ = document.createElement("h2");
    const img$$ = document.createElement("img");
    h2$$.className = "b-gallery__title";
    img$$.setAttribute("src", anime.image);
    img$$.className = "img";
    h2$$.textContent = anime.title;
    div$$.appendChild(h2$$);
    div$$.appendChild(img$$);
    container$$.appendChild(div$$);
    }
    document.body.appendChild(container$$);
}