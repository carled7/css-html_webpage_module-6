function calculator() {

    let a = document.getElementById("adults");
    let c = document.getElementById("children");
    let hours = document.getElementById("duration");

    //Meat Calculator
    let totalMeat = ((a.value * 400 + (c.value * 200)) * (hours.value / 2)) / 1000;
    let meat = document.getElementsByTagName("li")[0];
    meat.innerText = "Amount of meat: " + totalMeat + "Kg";

    //Drink Calculator
    let totalDrink = Math.ceil(((a.value * 1500 + c.value * 750) * (hours.value / 2)) / 1000);
    let drink = document.getElementsByTagName("li")[1];
    drink.innerText = "Amount of drink: " + totalDrink + "l";

    //Garlic Bread Calculator
    var totalGarlicBread = (parseInt(a.value) + parseInt(c.value)) * hours.value;
    let garlicBread = document.getElementsByTagName("li")[2];
    garlicBread.innerText = "Amount of garlic bread: " + totalGarlicBread;
}
function efect(x){
    x.style.backgroundColor = "#306070"
    x.style.color = "#D9F3FC"
    x.style.padding = "10px 20px"
}
function disefect(x){
    x.style.backgroundColor = "#68D0F2"
    x.style.color = "#306070"
    x.style.padding = "10px 15px"
}
