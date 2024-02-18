
import {  getMenuDetails } from "/src/dishSource.js";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set} from "/src/teacherFirebase.js";
import {firebaseConfig} from "/src/firebaseConfig.js";
import DinnerModel from "./DinnerModel";
const app= initializeApp(firebaseConfig)
const db= getDatabase(app)



// Add relevant imports here 
// TODO

// Initialise firebase app, database, ref

const PATH="dinnerModel16";
const rf= ref(db, PATH);

//set(ref(db, PATH+"/test"), "dummy")

/*set(ref(db, PATH+"/test"), modelToPersistence({
    numberOfGuests:5, 
    currentDishId:13, 
    dishes:[{id:13, title:"dummy1"}, 
            {id:42, title:"dummy2"}]
   })) */

function modelToPersistence(model){
    const numberOfGuests = model.numberOfGuests;

    const dishIds = model.dishes.map(dish => dish.id).sort((a, b) => a - b);
  
    const currentDishId = model.currentDishId;
  
    return {
      numberOfGuests: numberOfGuests, 
      dishes: dishIds,    
      currentDishId: currentDishId 
}
}

function persistenceToModel(dataFromFirebase, model){

    const defaultGuests = 2;
    const defaultCurrentDishId = null;
    
    const safeData = dataFromFirebase && typeof dataFromFirebase === 'object' ? dataFromFirebase : {};
 
    const numberOfGuests = safeData.numberOfGuests || defaultGuests;
    model.setNumberOfGuests(numberOfGuests);

    const currentDishId = 'currentDishId' in safeData ? safeData.currentDishId : defaultCurrentDishId;
    if (currentDishId !== null) {
        model.setCurrentDishId(currentDishId);
    }

    if (safeData.dishes && Array.isArray(safeData.dishes) && safeData.dishes.length > 0) {
        
        return getMenuDetails(safeData.dishes).then(dishes => {
           
            model.dishes = dishes;
            return "returned"; 
        });
    } else {
        
        model.dishes = [];
        return Promise.resolve("returned");
    }
}


function saveToFirebase(model){
    if (model.ready) {
        const dataToSave = modelToPersistence(model);
        set(rf, dataToSave)
    }
}
function readFromFirebase(model){
    model.ready=false;
    return get(rf)
              .then(function convertACB(snapshot){
                     // return promise
                     return persistenceToModel(snapshot.val(), model);
               })
              .then(function setModelReadyACB(){
                          model.ready=true;
              })     
}

function connectToFirebase(model, watchFunction){
    readFromFirebase(model).then(() => {

        model.ready = true;
    });


    const unsubscribe = watchFunction(() => {

        return [model.numberOfGuests, model.dishes.map(dish => dish.id), model.currentDishId];
    }, () => {

        saveToFirebase(model);
    });

    return unsubscribe;
}

// Remember to uncomment the following line:
export { connectToFirebase, modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase }
