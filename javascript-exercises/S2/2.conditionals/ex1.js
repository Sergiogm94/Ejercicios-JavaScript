const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for(let i = 0; i < alumns.length; i++){
    const alu = alumns[i];
    let cuenta = 0;

    if(alu.T1 === true){
        cuenta++
    }
    if(alu.T2 === true){
        cuenta++
    }
    if(alu.T3 === true){
        cuenta++
    }
    if(cuenta >=2){
        alu.isApproved = true
    }
    else{
        alu.isApproved = false
    }
}
console.log(alumns);