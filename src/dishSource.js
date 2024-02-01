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