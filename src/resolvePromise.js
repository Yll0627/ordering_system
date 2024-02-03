export function resolvePromise(prms, promiseState){

    promiseState.promise = prms; 
    promiseState.data = null; 
    promiseState.error = null;
 
    function dataACB(result)  {
        if(promiseState.promise !== prms) { 
            return;
        }
        promiseState.data = result; 

    }


    function errorACB(err) {
        if(promiseState.promise !== prms) { //Return om promise ändrats
            return;
        }
        promiseState.error = err; 
    }

    if(prms !== null) {
        prms.then(dataACB).catch(errorACB);
    }
    
}

export default resolvePromise;