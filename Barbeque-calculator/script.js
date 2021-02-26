function calculator() {

    let a = document.getElementById("adults");
    let c = document.getElementById("children");
    let hours = document.getElementById("duration");

    //Meat Calculator
    console.log(totalMeat = ((a.value * 400 + (c.value * 200)) * (hours.value / 2)) / 1000);
    let meat = document.getElementsByTagName("p")[0];
    meat.innerText = "Amount of meat: " + totalMeat + "Kg";

    //Drink Calculator
    console.log(totalDrink = ((a.value * 1500 + c.value * 750) * (hours.value / 2)) / 1000);
    let drink = document.getElementsByTagName("p")[1];
    drink.innerText = "Amount of drink: " + totalDrink + "l";

    //Garlic Bread Calculator
    var totalGarlicBread = (parseInt(a.value) + parseInt(c.value)) * hours.value;
    console.log(totalGarlicBread)
    let garlicBread = document.getElementById("p3")
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
