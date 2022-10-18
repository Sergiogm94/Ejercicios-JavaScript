const boton$$ = document.createElement("button");
boton$$.setAttribute("id","btnToClick")
boton$$.textContent = "Pulsar";
document.body.appendChild(boton$$);

function clickMe (event){
    console.log(event)
}

boton$$.addEventListener("click", clickMe);


