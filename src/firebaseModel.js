
import {  getMenuDetails } from "/src/dishSource.js";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set} from "/src/teacherFirebase.js";
import {firebaseConfig} from "/src/firebaseConfig.js";
const app= initializeApp(firebaseConfig)
const db= getDatabase(app)


const PATH="dinnerModel16";
const rf= ref(db, PATH);

//set(ref(db, PATH+"/test"), "dummy")

/*set(ref(db, PATH+"/test"), modelToPersistence({
    numberOfGuests:5, 
    currentDishId:13, 
    dishes:[{id:13, title:"dummy1"}, 
            {id:42, title:"dummy2"}]
   })) */


/* Return an object with the model number of guests, 
an array of the dish IDs, and the current dish ID. */
function modelToPersistence(model){
    const modelPersistence=  {
        numberOfGuests : model.numberOfGuests,
        dishes: model.dishes.map(dishtransformerCB).sort(),
        currentDishId : model.currentDishId,
      }
      return modelPersistence;
}

    function dishtransformerCB(dish){
    return dish.id;
    }


// get the object from the cloud and return promise
function persistenceToModel(dataFromFirebase, model){

    const defaultGuests = 2;
    const defaultCurrentDishId = null;
    
    const safeData = dataFromFirebase && typeof dataFromFirebase === 'object' ? dataFromFirebase : {};//dataFromFirebase exists and is an object, otherwise, it is assigned an empty object
 
    const numberOfGuests = safeData.numberOfGuests || defaultGuests;
    model.setNumberOfGuests(numberOfGuests);

    const currentDishId = 'currentDishId' in safeData ? safeData.currentDishId : defaultCurrentDishId;
    if (currentDishId !== null) {
        model.setCurrentDishId(currentDishId);
    }

    // work when the firebase database is empty
    if (safeData.dishes && Array.isArray(safeData.dishes) && safeData.dishes.length > 0) {
        
        //waiting until all the dishes are retrieved. 
        return getMenuDetails(safeData.dishes).then(function transDishBC(dishes) {
            model.dishes = dishes; 
            return "returned";
        });

    } else {
        model.dishes = [];
        return Promise.resolve("returned"); //return promise
    }
}


function saveToFirebase(model){
    if (model.ready) { //persists the result after finish reading to avoid infinite loops
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
    readFromFirebase(model).then(function toReadBC() {
        model.ready = true;
    });

    // side effect
    const unsubscribe = watchFunction(function checkABC1() {    //to check whether the change is relevant for the side effect.
        return [model.numberOfGuests, model.dishes.map(function mapdishID(dish) {
            return dish.id;
            }), model.currentDishId];
    }, 
    function sideEffectACB2 () {
        saveToFirebase(model); //saves the current state of the model to synchronize that state with Firebade
    });

    return unsubscribe;
}


export { connectToFirebase, modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase }
