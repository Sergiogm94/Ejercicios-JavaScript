const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let mayores = ages.filter(function(mayor){
    return mayor >= 18;
})

console.log(mayores);