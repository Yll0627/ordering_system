import { DetailsView } from "../views/detailsView.jsx";
import { observer } from "mobx-react-lite";

const Details = observer( 
    function Details(props) {

    function isDishInMenu(currentDish) {
        return !!props.model.dishes.find(dish => dish.id === currentDish.id);
    }


    function addToMenu() {
        if (props.model.currentDishPromiseState.data) {
            props.model.addToMenu(props.model.currentDishPromiseState.data);
        }
    }
    

    function handleAddToMenuEvent() {
        addToMenu();
    }
    

    function renderBasedOnPromiseState(promiseState) {

        if (!promiseState.promise) {
            return <div>no data</div>;
        }
        if (promiseState.promise && !promiseState.data && !promiseState.error) {
            return <img className="imageForLoading" src="https://brfenergi.se/iprog/loading.gif" alt="Loading..."></img>;
        }
        if (promiseState.error) {
            return <div>Error: {promiseState.error.toString()}</div>;
        }
        if (promiseState.data) {

            const dishData = promiseState.data;
            const guests = props.model.numberOfGuests;
            const dishInMenu = isDishInMenu(dishData);

            return (
                <DetailsView
                    dishData={dishData}
                    isDishInMenu={dishInMenu}
                    guests={guests}
                    addToMenu={handleAddToMenuEvent} 
                />
            );
        }

        

        return <div>Unexpected state</div>;
    }


    return renderBasedOnPromiseState(props.model.currentDishPromiseState);
}
)


export { Details };


