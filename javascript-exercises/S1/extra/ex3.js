const movies = [{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad", durationInMinutes: 225},
{name: "Origen", durationInMinutes: 165},
{name: "El señor de los anillos", durationInMinutes: 967},
{name: "Solo en casa", durationInMinutes: 214},
{name: "El jardin de las palabras", durationInMinutes: 40}];

const peliCorta = [];
const peliMedia = [];
const peliLarga = [];

for(let i = 0; i < movies.length; i++){
    if(movies[i].durationInMinutes < 100){
        peliCorta.push(movies[i]);
    }
    else if(movies[i].durationInMinutes > 100 && movies[i].durationInMinutes < 200){
        peliMedia.push(movies[i]);
    }
    else{
        peliLarga.push(movies[i]);
    }
}

console.log(peliCorta);
console.log(peliMedia);
console.log(peliLarga);
