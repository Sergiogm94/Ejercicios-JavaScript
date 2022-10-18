const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const copy = [...colors];

copy.splice(1,1);

console.log(copy);