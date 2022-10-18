const baseUrl = 'https://api.nationalize.io?name=';
const input$$ = document.querySelector("input");
const button$$ = document.querySelector('button');

const searchName = (name) => {
    fetch(baseUrl + name )
    .then((res) => res.json())
    .then((myJson) => drawPs(myJson))
}


const drawPs = (data) => {
    const {name, country} = data;
    for(let i = 0; i< country.length; i++){
        const {country_id, probability} = country[i];
        const p$$ = document.createElement("p");
        p$$.textContent = "El nombre " + name + " tiene un " + probability * 100 + " porciento de se de " + country_id;
        document.body.appendChild(p$$);
        const button2$$ = document.createElement("button");
        button2$$.textContent = "X";
        p$$.appendChild(button2$$)
        button2$$.addEventListener("click", () => p$$.remove())
        //button2$$.addEventListener("click", () => remove(p$$))
    }
}

button$$.addEventListener("click", ()=> searchName(input$$.value));


