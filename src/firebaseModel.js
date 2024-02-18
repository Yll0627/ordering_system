
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set} from "/src/teacherFirebase.js";
import {firebaseConfig} from "/src/firebaseConfig.js";
const app= initializeApp(firebaseConfig)
const db= getDatabase(app)

const PATH="dinnerModel16";

set(ref(db, PATH+"/test"), "dummy");
// Add relevant imports here 
// TODO

// Initialise firebase app, database, ref
// TODO

function modelToPersistence(/* TODO */){
    // TODO return an object
}

function persistenceToModel(/* TODO */){
    // TODO return a promise
}

function saveToFirebase(model){
    // TODO
}
function readFromFirebase(model){
    // TODO
}
function connectToFirebase(model, watchFunction){
    // TODO
}
// Remember to uncomment the following line:
//export { connectToFirebase, modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase }
