// un-comment when needed:
import {sortIngredients} from "/src/utilities.js";
import "/src/style.css"

/* Functional JSX component. Name must start with capital letter */
export function SummaryView(props){
    return (
            <div class="debug">
              Summary for <span title="nr guests">{props.people}</span> persons:

            
              
              <table class="summeryTable">
                  {  //  <---- in JSX/HTML, with this curly brace, we go back to JavaScript, and make a comment
                   

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Aisle</th>
                    <th>Quantity</th>
                    <th>unit</th>
                  </tr>
                </thead>

                  }
                
                <tbody>
                  {  
                      sortIngredients(props.ingredients).map(ingredientTableRowCB) // Here you will use Array Rendering to generate a table row for each element of the ingredients prop (an array) 
                  }
                </tbody>
              </table>
            </div>
    );
    /* callback for Array Rendering */
    function ingredientTableRowCB(ingr){
        return <tr key={ingr.id } >
                 <td>{ingr.name}</td>
                 <td>{ingr.aisle}</td>
                 <td className="align-right">{(ingr.amount * props.people).toFixed(2)} </td>
                 <td> {ingr.unit}</td>
               </tr>;
    }
}
