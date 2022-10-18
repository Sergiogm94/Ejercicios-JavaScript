/*En base a la api Open Trivia (https://opentdb.com/api_config.php), 
    vamos a desarrollar un trivial con la siguiente url 'https://opentdb.com/api.php?amount=10'. 
        --- ATACAR API
    Esta api nos devolverá una serie de preguntas con sus respuestas, tanto erroneas como correctas. 
        --- API DEVUELVE PREGUNTA RESPUESTAS Y RESPUESTA CORRECTA
    La idea es hacer un juego en el que el usuario introduzca en un input las caracteristicas del Trivial
    y que al darle al 'Start Game' le salgan las preguntas de la api para que pueda comenzar el juego. 
    Una vez las responda todas, le mostraremos al usuario el resultado.
        input --- cantidad preguntas
        button start --> cuando hago click --> hago la llamada a la api
            LLAMADA A LA API
            PINTAR LAS PREGUNTAS Y LAS RESPUESTAS
                RESPUESTAS -- SPREAD OPERATOR CON RESPUESTA CORRECTA E INCORRECTA
                SORT RESPUESTAS para ponerlas aleatorias
        PARA CADA RESPUESTA --> escuchar la respuesta --> seleccionas respuesta para pregunta
            --- añadir al objeto una propiedad para la respuesta  pregunta.respuesta = respuesta elegida
        UNA VEZ ACABADO RECORREMOS LAS PREGUNTAS Y COMPROBAMOS SI LA RESPUESTA CORRECTA ES IGUAL RESPUESTA ELEGIDA
    Ten en cuenta que hay dos tipos de preguntas. 
    Aquellas con 3 respuestas erroneas y 1 correcta y
    aquellas con respuesta verdadero / falso. */