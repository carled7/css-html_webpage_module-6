

function overButton(x) {
    x.style.padding = "10px"
    x.style.borderRadius = "7px"
    x.style.color = "white"
    x.style.backgroundColor = "red"
}
function outButton(y) {
    y.style.padding = "8px"
    y.style.borderRadius = "3px"
    y.style.color = "#262626"
    y.style.backgroundColor = "lightblue"
}
var c1 = 0
function count(){
    let b1 = document.getElementById("b1")
    b1.innerHTML = "<strong>01 </strong>Button: " + ++c1
}
var c2 = 0
function count2(){
    let b2 = document.getElementById("b2")
    b2.innerHTML = "<strong>02 </strong>Button: " + ++c2
}
var c3 = 0
function count3(){
    let b3 = document.getElementById("b3")
    b3.innerHTML = "<strong>03 </strong>Button: " + ++c3
}
var c4 = 0
function count4(){
    let b4 = document.getElementById("b4")
    b4.innerHTML = "<strong>04 </strong>Button: " + ++c4
}