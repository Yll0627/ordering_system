import {
    BASE_URL,
    API_KEY
} from "../src/apiConfig.js"


function searchDishes(searchParams) {

    const endpoint = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch";
    const query = new URLSearchParams(searchParams).toString();
    const url = `${BASE_URL}/${endpoint}?${query}`;

    return fetch(url, {
        method: "GET",
        headers: {
            'X-DH2642-Key': API_KEY,
            'X-DH2642-Group':  16,
        }
    })
    .then(response => response.json()) 
    .then(data => extractDishesACB(data)); 
}

function extractDishesACB(responseObject) {

    return responseObject.results; 
}

function getMenuDetails(ids_array) {

    const endpoint = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk";
    const queryObject = { ids: ids_array }; 
    const query = new URLSearchParams(queryObject).toString();
    const url = `${BASE_URL}/${endpoint}?${query}`;

    return fetch(url, {
        method: "GET",
        headers: {
            'X-DH2642-Key': API_KEY,
            'X-DH2642-Group':  16,
        }
    })
    .then(response => {

        if (!response.ok) {

            throw new Error(`API call failed with status ${response.status}`);
        }
        return response.json(); 
    })
}


function getDishDetails(id) {

    return getMenuDetails([id])
        .then(dishArrayToSingleDish); 
}

function dishArrayToSingleDish(dishArray) {

    return dishArray[0];
}

export {
    
    searchDishes,getMenuDetails,getDishDetails
}

/* yueling Test 2.1.2 - 2.1.4

import {BASE_URL,API_Server,API_KEY} from "/Users/fanfan6027/Documents/GitHub/yueling-zhikun-vt24-2-and-3/src/apiConfig.js";

export function getDishDetails(id){
    return getMenuDetails(id).then(theOnlyDishABC)
}
function theOnlyDishABC(theDish){
    return theDish[0]
}

export function getMenuDetails(ids_array){
    let myIds_array = new URLSearchParams({ids: ids_array}).toString();
    let myIdsUrl = BASE_URL + 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?'+ myIds_array ;
    return fetch(myIdsUrl,
        {
            method: "GET", 
            headers:{     
                'X-DH2642-Key': API_KEY,
                'X-DH2642-Group': 16, 
            },
        }).then(responseABC)

}

export function searchDishes(searchParams){
    let params = new URLSearchParams(searchParams).toString();
    let recipeUrl = BASE_URL + 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?' + params ;

    return fetch(recipeUrl,
    {
        method: "GET", 
        headers:{     
            'X-DH2642-Key': API_KEY,
            'X-DH2642-Group': 16, 
        },
    }).then(responseABC).then(theDishObjectABC) 

}

export function responseABC(response){
        if (response.status !== 200)
            throw new Error("The wrong HTTP status: " + response.status);
    else{
            return response.json();
    }
}

export function theDishObjectABC(theDish){
   return theDish.results;
}


*/