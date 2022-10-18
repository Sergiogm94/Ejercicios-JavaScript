const focus$$ = document.querySelector("input")

function foc(event){
    console.log(event.target.value);
}

focus$$.addEventListener('focus', foc);

/*
const input$$ = document.querySelectorAll('input');
// const input2$$ = document.querySelector('.input');
function pepe(mieventito){
    console.log("name", mieventito.target.name,"value", mieventito.target.value);
}
for (let index = 0; index < input$$.length; index++) {
    input$$[index].addEventListener('focus', pepe);
}
// input$$.addEventListener('focus', handleFocus);
// input2$$.addEventListener('focus', handleFocus);

//EVENTOS

//Elemento --> elemento sobre el que ejecutamos una accion

//Acción --> Tipo de acción que recibe mi elemento(focus, input, change, click, mouseenter, mouseleave)

//Funcion Callback --> funcion que se lanza cuando se realiza la accion

//Evento --> información que arrastramos en la función sobre el ELEMENTO que ha sido objetivo de la ACCION



/// ELEMENTO.addEventListener(ACCION, CALLBACK) --> Cuando hay ACCION sobre ELEMENTO de lanza CALLBACK

/// Cuando se lanza CALLBACK arrastra consigo un EVENTO que tenemos que definir en los parametros que recibimos

tiene menú contextual
*/