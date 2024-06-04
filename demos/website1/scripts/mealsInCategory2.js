"use strict";


console.log("mealsincategory");

//https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="


window.onload = function() {
    const getResultsButton = document.getElementById("getResultsButton");
    getResultsButton.onclick = onGetResultsButtonClick;
};

function onGetResultsButtonClick(){
    console.log("clicked");

    const categoryInput = document.getElementById("categoryInput");
    const resultsOutput = document.getElementById("resultsOutput");

    let actualUrl = apiBaseUrl + categoryInput.value;

    console.log ("URL: " + actualUrl);

    fetch(actualUrl).then(doWhenResponseBegins);


}

function doWhenResponseBegins(response){
    response.json().then(processResultDataFromAPI)
}

function processResultDataFromAPI(data){
    console.log(data);
    doStuffWithArrayOfMeals(data.meals)
}

function doStuffWithArrayOfMeals(meals){
        for(let meal of meals){
            doStuffWithMeal(meal);
        }
}

function doStuffWithMeal(meal){
    let p = document.createElement("p");
    p.innerHTML = meal.strMeal;
    resultsOutput.appendChild(p);
}