const baseUrl = 'https://api.nationalize.io?name=';
const input$$ = document.querySelector("input");
const buscar = () => {
    fetch(baseUrl + input$$.value)
    .then((Response) => 
        Response.json()
        )
    .then((myjson) =>{
        console.log(myjson);
        return myjson;
    })
}
const button$$ = document.querySelector('button');
button$$.addEventListener('click', buscar);