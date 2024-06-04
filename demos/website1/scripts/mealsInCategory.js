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


