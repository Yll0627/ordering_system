import "/src/style.css"
export function DetailsView(props) {

    function ingredientsDetail(ingredient){
        return(
           
        <tr key={ ingredient.id } >
            <td>{ingredient.name}</td>
            <td>{ingredient.amount}</td>
            <td>{ingredient.unit}</td>
        </tr>
            
            
        )
    }


    function dishDataCB(props){
        return(
            <div class="align-right">
                <th>Price: {props.dishData.pricePerServing} </th> 
            <div>
                <th> For {props.guests} guests: {(props.guests * props.dishData.pricePerServing).toFixed(2)}</th>
            </div>
            </div>   
        )
    }

    function addMenuACB(){
        props.addToMenu()
        window.location.hash="#search"
    }

    function cancelACB(){
        window.location.hash="#search"

    }

    return(
        

        <div class="alignCenter">
            <div>
                <img class = "imageDetail" src={props.dishData.image}></img>
                <h2>{props.dishData.title}</h2>
                {dishDataCB(props)} 
            </div>
        
            <div>
            <table class="ingrTable">
                <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>Amount</th>
                    <th>Unit</th>
                </tr>
                </thead>
                <tbody>
                    {props.dishData.extendedIngredients.map(ingredientsDetail)}
                </tbody>
            </table>
            </div>

        <div  class="info" >
        <div>{props.dishData.instructions}</div>
        <span ><a href={props.dishData.sourceUrl}> More information</a></span>
            <p></p>
            <div>
            <button class="button" disabled = {props.isDishInMenu} onClick = {addMenuACB}>Add to menu</button>
            <button class="button" onClick = {cancelACB}>Cancel</button>
            </div>
        </div>
       
    </div>
    )
}

/*
export function DetailsView(props){
    return(
        <div className="detailInfo">
            <image className="imageDetail" src={props.dishData.image} height='200'></image>
            <h2 className="titleCenter">{props.dishData.title}</h2>
            <div>
                <p>Price:{props.dishData.pricePerServing}</p> 
                <p></p>
                <p>For {props.guests} guests {(props.guests * props.dishData.pricePerServing).toFixed(2)}</p>
            </div>
            <br></br>

            
            
            <button onClick={clicktoAdd}>Add to Menu</button>

        </div>
        
    )
    function clicktoAdd(){
        props.ddToMenu();
    }

}
*/