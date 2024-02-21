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
        <div>
         <p class="yourOrder"> Your Order:</p> 
          <div class="orderConp" >
            <div><p class="guest">Guest: </p>
            <button onClick={DecrementACB}  disabled={props.number == 1}>-</button>{props.number}
            <button onClick={IncrementACB} >+</button>
            </div>

              <table class="sidebarTable">
                
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
        </div>
    );


    function DishInTableCB(dish){

        return <tr key={dish.id}>
        <td>
          <button onClick={RemoveDishACB} class="removeButton">
            <div class="sign">
              <svg
                viewBox="0 0 16 16"
                class="bi bi-trash3-fill"
                fill="currentColor"
                height="18"
                width="18"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
                ></path>
              </svg>
            </div>

            <div class="text">Delete</div>
            
            </button>
          </td>

        
        <td> <a onClick={DishNameClickACB} href="#/details" class="orderlink">{dish.title}</a></td> 
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