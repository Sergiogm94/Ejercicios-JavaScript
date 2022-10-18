const input$$ = document.querySelector("input");

function entrada(event){
    console.log(event.target.value);
}

input$$.addEventListener('input', entrada);
