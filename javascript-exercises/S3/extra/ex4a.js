const countries = [
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


const titulo$$ = document.createElement("h4");
const img$$ = document.createElement("img");

for (let i = 0; i < countries.length; i++){
    const country = countries[i];
    const div$$ = document.createElement("div");
    titulo$$.appendChild(country.title);
    img$$.appendChild(country.imgUrl);
    div$$.appendChild(titulo$$);
}

document.body.appendChild(div$$);


