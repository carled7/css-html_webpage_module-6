var i = 0;
var checkXA1;
var checkOA1;
var checkXA2;
var checkOA2;
var checkXA3;
var checkOA3;

var checkXB1;
var checkOB1;
var checkXB2;
var checkOB2;
var checkXB3;
var checkOB3;

var checkXC1;
var checkOC1;
var checkXC2;
var checkOC2;
var checkXC3;
var checkOC3;

function interactionA1(){
    
    let A1Field = document.getElementById("A1");

    if(i%2!=0){
        A1Field.setAttribute("status","selected");
        A1Field.innerHTML = "X";   
        checkXA1 = true;
    }
    else{
        A1Field.setAttribute("status","selected");
        A1Field.innerHTML = "O";
        checkOA1 = true;
    }
    i++;
}
function interactionA2(){
    
    let A2Field = document.getElementById("A2");

    if(i%2!=0){
        A2Field.setAttribute("status","selected");
        A2Field.innerHTML = "X";   
        checkXA2 = true;
    }
    else{
        A2Field.setAttribute("status","selected");
        A2Field.innerHTML = "O";
        checkOA2 = true;
    }
    i++;
}
function interactionA3(){
    
    let A3Field = document.getElementById("A3");

    if(i%2!=0){
        A3Field.setAttribute("status","selected");
        A3Field.innerHTML = "X";   
        checkXA3 = true;
    }
    else{
        A3Field.setAttribute("status","selected");
        A3Field.innerHTML = "O";
        checkOA3 = true;
    }
    i++;

}
function interactionB1(){
    
    let B1Field = document.getElementById("B1");

    if(i%2!=0){
        B1Field.setAttribute("status","selected");
        B1Field.innerHTML = "X";   
        checkXB1 = true;
    }
    else{
        B1Field.setAttribute("status","selected");
        B1Field.innerHTML = "O";
        checkOB1 = true;
    }
    i++;

}
function interactionB2(){
    
    let B2Field = document.getElementById("B2");

    if(i%2!=0){
        B2Field.setAttribute("status","selected");
        B2Field.innerHTML = "X";   
        checkXB2 = true;
    }
    else{
        B2Field.setAttribute("status","selected");
        B2Field.innerHTML = "O";
        checkOB2 = true;
    }
    i++;

}
function interactionB3(){
    
    let B3Field = document.getElementById("B3");

    if(i%2!=0){
        B3Field.setAttribute("status","selected");
        B3Field.innerHTML = "X";   
        checkXB3 = true;
    }
    else{
        B3Field.setAttribute("status","selected");
        B3Field.innerHTML = "O";
        checkOB3 = true;
    }
    i++;

}
function interactionC1(){
    
    let C1Field = document.getElementById("C1");

    if(i%2!=0){
        C1Field.setAttribute("status","selected");
        C1Field.innerHTML = "X";   
        checkXC1 = true;
    }
    else{
        C1Field.setAttribute("status","selected");
        C1Field.innerHTML = "O";
        checkOC1 = true;
    }
    i++;

}
function interactionC2(){
    
    let C2Field = document.getElementById("C2");

    if(i%2!=0){
        C2Field.setAttribute("status","selected");
        C2Field.innerHTML = "X";   
        checkXC2 = true;
    }
    else{
        C2Field.setAttribute("status","selected");
        C2Field.innerHTML = "O";
        checkOC2 = true;
    }
    i++;

}
function interactionC3(){
    
    let C3Field = document.getElementById("C3");

    if(i%2!=0){
        C3Field.setAttribute("status","selected");
        C3Field.innerHTML = "X";   
        checkXC3 = true;
    }
    else{
        C3Field.setAttribute("status","selected");
        C3Field.innerHTML = "O";
        checkOC3 = true;
    }
    i++;

}

console.log(checkXA1);
