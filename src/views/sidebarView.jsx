import {dishType, menuPrice, sortDishes} from "/src/utilities.js";
import "/src/style.css"

export function SidebarView(props){

    function IncrementACB() {
        console.log(`Increment: ${props.number + 1}`);
        props.onNumberChange(props.number + 1);

    }

    function DecrementACB() {
        console.log(`Decrement: ${props.number - 1}`);
        props.onNumberChange(props.number - 1);

    }
    return (
        <div >
            <button onClick={DecrementACB}  disabled={props.number == 1}>-</button>{props.number}
            <button onClick={IncrementACB} >+</button>

              <table>
                
                <tbody>
                  {  
                     sortDishes(props.dishes).map(DishInTableCB)// Here you will use Array Rendering to generate a table row for each element of the ingredients prop (an array) 
                  }
                <tr>
                    <td></td>
                    <td>Total:</td>
                    <td></td>
                    <td class="align-right">{(menuPrice(props.dishes)* props.number).toFixed(2)}</td>
                </tr>
                </tbody>
              </table>


        </div>
    );


    function DishInTableCB(dish){

        return <tr key={dish.id}>
        <td><button onClick={RemoveDishACB}>x</button></td>
        <td> <a onClick={DishNameClickACB} href="#/details">{dish.title}</a></td> 
        <td className = "align-right">{dishType(dish)}</td>
        <td className ="align-right">{(dish.pricePerServing * props.number).toFixed(2)}</td>
        </tr>;

    function DishNameClickACB()  
    { console.log(dish); 
      props.DishClick(dish);}

    function RemoveDishACB() 
    {console.log("Remove");
     props.DishRemove(dish);}


    }




}