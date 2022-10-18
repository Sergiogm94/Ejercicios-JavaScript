const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

input$$ = document.body.querySelector('[data-function="toFilterStreamers"]');

button$$ = document.querySelector("button");
button$$.addEventListener("click", () => buscar(input$$.value));


const buscar = (text) => { 
const busqtreamer = streamers.filter(function (streamer){
    if(streamer.name.includes(text)){
        return streamer.name
    }})
    console.log(busqtreamer);

}