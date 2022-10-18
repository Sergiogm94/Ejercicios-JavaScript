fetch('https://api.agify.io?name=michael')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    return myJson;
  });

/*
  /fecth ---> petición --> nos devuelve una promesa
  //then --> espera a que se resuelva la promesa --> recibimos una respuesta
       --> response necesitamoss obtener el json que viene en esa respuesta --> response.json() --> nos da otra promesa
  //then --> resolver esta segunda promesa --> recibimos el objeto de la petición
  fetch(LLAMADA A LA API)             //llamamos a la api --> obtenemos una promesa de recibir una response
  .then((response) => response.json()) // resolvemos la promesa y obtenemos una resspuesta(response) --> luego llamamos al metodo json() --> obtenemos una promesa de recibir el objeto de la repuesta
  .then((data) => console.log(data)) //resolvemos la promesa y obtenemos el objeto de la respuesta
  */