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
            <div>
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

    function backToSearchACB(){
        window.location.hash="#/search"
    }

    return(

        <div class="alignCenter">
            <div>
                <img class = "imageDetail" src={props.dishData.image}></img>
                <div class="detailbutton">
                <button class="addtomenu" disabled = {props.isDishInMenu} onClick = {addMenuACB}>Add to menu</button>
                 <button class="cancelbutton" onClick = {backToSearchACB}>Cancel</button>
                 </div>
                <div style="width:560px"><h2>{props.dishData.title}</h2> </div>  
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
        </div>
       
    </div>
    )
}

