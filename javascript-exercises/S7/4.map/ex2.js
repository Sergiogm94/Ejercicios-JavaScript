const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const name = users.map(user =>{
    if(user.name.includes("A")){
        user.name = "Anacleto";   
    }
    else{
        user.name
    }
    return user.name
})
console.log(name);