
import "/Users/fanfan6027/Documents/GitHub/yueling-zhikun-vt24-2-and-3/src/style.css"
export function SearchResultsView(props) {
    
    

    function returnResultsCB(dish) {
    
        function searchResultACB() {
            props.chosenDish(dish);
            window.location.hash="#details"
        }
        return(
            <span onClick={searchResultACB} key = {dish.id} className="searchResult">
                    <img className="imageArray" src={dish.image} height="100"></img>
                    <div>
                    <div className="alignCenter">{dish.title}</div>
                    </div>
                </span>
        )
    } 
    
    
    return(
        <div>{props.searchResults.map(returnResultsCB)} </div>
     );
    
    }



    /* yueling TW2.2.2

    import "/src/style.css"

export function SearchResultsView(props) {
    return(
        <div>
              {props.searchResults.map(dishRenderACB)}
        </div>
    )
    function dishRenderACB(dish){
        return(
            <span key={dish.id} className="imageRender" onClick={checkDetailClickACB}>
                <img className="imageArray" src={dish.image} height='100'></img>
                <div className="alignCenter">{dish.title}</div>

            </span>

        )

        function checkDetailClickACB(){
            props.searchDetail(dish);
        }
        
    }    

}
*/