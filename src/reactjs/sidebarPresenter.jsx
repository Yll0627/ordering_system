import {SidebarView} from "../views/sidebarView.jsx";
import { observer } from "mobx-react-lite";


const Sidebar = observer(
function Sidebar(props){



    function updateNumberACB(number) {
        props.model.setNumberOfGuests(number)
    }

    function dishRemoveACB(dishToRemove) {
        props.model.removeFromMenu(dishToRemove)
    }

    function dishClickACB(dish) {
        props.model.setCurrentDishId(dish.id)
    }
    
    return<SidebarView number={props.model.numberOfGuests}
    onNumberChange={updateNumberACB}
    dishes={props.model.dishes}
    DishRemove={dishRemoveACB}
    DishClick={dishClickACB} />;
}
)

export { Sidebar }