/* 
   The Model keeps the state of the application (Application State). 
   It is an abstract object, i.e. it knows nothing about graphics and interaction.
*/

import resolvePromise from "./resolvePromise.js";
import { searchDishes,getDishDetails } from "./dishSource.js";

const model = {  

    numberOfGuests: 2,
    dishes: [],
    currentDishId: null,  // null means "intentionally empty"
    searchParams: {},
    searchResultsPromiseState: {},
    currentDishPromiseState:{},



    setCurrentDishId(dishId){
        if (dishId && this.currentDishId !== dishId) {
            this.currentDishId = dishId;
            const dishDetailsPromise = getDishDetails(dishId);
            this.currentDishPromiseState.promise = dishDetailsPromise;
            resolvePromise(dishDetailsPromise, this.currentDishPromiseState);
        }
    },
    
    setNumberOfGuests(number){
        if (!Number.isInteger(number) || number <= 0) {
            throw new Error("number of guests not a positive integer");
        }
        this.numberOfGuests = number;
    },


    
    addToMenu(dishToAdd){
        // array spread syntax example. Make sure you understand the code below.
        // It sets this.dishes to a new array [   ] where we spread (...) the elements of the existing this.dishes
        this.dishes = [...this.dishes, dishToAdd];
    },

    // filter callback exercise
    removeFromMenu(dishToRemove){
        
        function shouldWeKeepDishCB(dish) {
            return dish.id !== dishToRemove.id;
        }
    
        this.dishes = this.dishes.filter(shouldWeKeepDishCB);
    },



    setCurrentDish(id){

        if (id !== undefined && this.currentDish !== id) {
            if (this.currentDish === id) {
                return;
            }
            this.currentDish = id;
            resolvePromise(getDishDetails(this.currentDish), this.currentDishPromiseState);
        }
    },
    

    setSearchQuery(query){
        this.searchParams.query = query 
    },
    
    setSearchType(type){
        this.searchParams.type = type
    },
 

    doSearch(params){
        
        this.searchParams = params;
        const searchPromise = searchDishes(this.searchParams);
        this.searchResultsPromiseState.promise = searchPromise;
        resolvePromise(searchPromise, this.searchResultsPromiseState);
    }
    // more methods will be added here, don't forget to separate them with comma!
};

export {model};