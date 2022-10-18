const ship1 = {name: "Banca rota", damage: 44, pv: 150};
const ship2 = {name: "Cacique pero no", damage: 66, pv: 124};


const attack = (ship1, ship2) =>{
    const damShip = Math.floor(Math.random() * (ship1.damage - 1)+ 1);

   ship2.pv = ship2.pv - damShip;


};

attack(ship1,ship2);
attack(ship2,ship1);

console.log(ship1);
console.log(ship2);









