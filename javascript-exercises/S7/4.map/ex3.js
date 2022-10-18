const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const visitedCity = cities.map(city =>{
    if(city.isVisited === true){
        city.name = city.name + " Visitado";
    }
    else {city.name;
}
return city.name}
)

console.log(visitedCity);