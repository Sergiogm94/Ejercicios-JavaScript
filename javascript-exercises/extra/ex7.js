const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`;

const frase = text.split("-");


for(let i = 0; i < frase.length; i++){
 frase[i] = frase[i].toUpperCase()
}

const nuevaFrase = frase.toString(" ").replace(/,/g, " ");

// Segunda forma //const nuevaFrase = frase.join(" ");

console.log(nuevaFrase);











