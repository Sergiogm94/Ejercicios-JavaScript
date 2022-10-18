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
    }
}

button$$.addEventListener("click", ()=> searchName(input$$.value));






/*const buscarNom = () => {
    fetch(baseUrl + input$$.value)
    .then((Response) => 
        Response.json()
        )
    .then((myjson) =>{
        console.log(myjson);

        for(let i = 0; i < myjson.country.lenght; i++){
            const ps$$ = document.createElement("p")
            ps$$.textContent = "El nombre" + input$$.value + " " + (myjson.country[i].probability * 100) + " " + "porciento de ser de" + myjson.country[i].country_id + "."

            document.body.appendChild(ps$$);

        }

        return myjson;
        
    })
}



button$$.addEventListener('click', buscarNom);*/