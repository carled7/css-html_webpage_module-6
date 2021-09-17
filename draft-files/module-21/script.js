//console.log("Hello World!");

/*  let args = process.argv.slice(2);
    let result;
    let calc = require("./calc.js");

    if(args[0] == "m"){
        result = calc.mult(args[1], args[2]);
    }else if(args[0] == "s"){
        result = calc.soma(args[1], args[2]);
    }else{
        console.log("Invalid input");
    }

    console.log(result); */

let fs = require('fs');


fs.readFile("HelloWorld.txt", "UTF8", (error, data) => {
    if(error){throw error};
    console.log(data);
})