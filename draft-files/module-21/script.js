//console.log("Hello World!");

let args = process.argv.slice(2);
let result;

function soma(x, y){
    return Number(x) + Number(y);
}
function mult(x, y){
    return Number(x) * Number(y);
}

if(args[0] == "m"){
    result = mult(args[1], args[2]);
}else if(args[0] == "s"){
    result = soma(args[1], args[2]);
}else{
    console.log("Invalid input");
}


console.log(result);