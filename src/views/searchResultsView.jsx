
import "/src/style.css"
export function SearchResultsView(props) {
    
    

    function returnResultsCB(dish) {
    
        function searchResultACB() {
            props.chosenDish(dish);
            window.location.hash="#details"
        }
        return(  
           <div class="cardArray">
            <div class="card" onClick={searchResultACB} key = {dish.id} >
            <span onClick={searchResultACB} key = {dish.id} className="searchResult">
                    <img className="imageArray" src={dish.image} height="100"></img>
                    <div>
                    <div className="cardTitle">{dish.title}</div>
                    </div>
                </span>
                </div>
            </div>
        )
    } 
    
    
    return(
        <div style="margin:3em" >{props.searchResults.map(returnResultsCB)} </div>
     );
    
    }


