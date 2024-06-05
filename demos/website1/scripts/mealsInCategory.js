"use strict";


console.log("mealsincategory");

//https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

let category;

window.onload = function() {
    let urlParams = new URLSearchParams(location.search);

    if( urlParams.has("category") === true){
        category = urlParams.get("category");
        loadCategoryData();
    }

    console.log(category);


};

function loadCategoryData(){

  //  const categoryInput = document.getElementById("categoryInput");

    const resultsOutput = document.getElementById("resultsOutput");
    const categoryHeader = document.getElementById("categoryHeader");

    categoryHeader.innerHTML = "Meals in category " + category;

    let actualUrl = apiBaseUrl + category;

    console.log ("URL: " + actualUrl);

    fetch(actualUrl)
    .then(response => {
        console.log("received a result and beginning to process it")        
        return response.json();
    })
    .then( data => {
        console.log("all of the data has been recieved and turned into an object now");
        console.log(data);

        for(let meal of data.meals){
            let p = document.createElement("p");
            p.innerHTML = meal.strMeal;

            resultsOutput.appendChild(p);
        }
    })

    console.log("some other work that happens before fetch finishes");

}


