import { SummaryView } from "../views/summaryView.jsx";
import {shoppingList} from "../utilities.js"

function Summary(props){
    return <SummaryView people={props.model.numberOfGuests} ingredients={shoppingList(props.model.dishes)}/>;
}

export { Summary }