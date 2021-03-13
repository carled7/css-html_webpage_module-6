function newUser (name, age) {
    return{name, age};
}
let users = [
    newUser("Robert", 78),
    newUser("Simone", 30),
    newUser("Dave", 54),
    newUser("Ray", 19),
    newUser("Louis", 15)
]

function arrayToString(){
    return users.name + " is " + users.age + " years old";
}

console.log(users.map(arrayToString));

/*Filter using '.filter'

function under25(users){
    return users.age < 25;
}
var usersUnder25 = users.filter(under25);
console.log(usersUnder25);*/


/*Filter using 'for'

for(var i of users){
    if(i.age < 25)
        console.log(i.name)
}*/