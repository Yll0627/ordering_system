export function DetailsView(props) {

    function ingredientsDetail(ingredient){
        return(
            <div>
        <div>
            <th> {ingredient.name} {ingredient.amount} {ingredient.unit} </th>
        </div>
        </div>
        )
    }


    function dishDataCB(props){
        return(
            <div>
                <th>Price:</th> {props.dishData.pricePerServing}
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
        

        <div>
        <img class = "image" src={props.dishData.image}></img>
        <th>{props.dishData.title}</th>
        {dishDataCB(props)}
        {props.dishData.extendedIngredients.map(ingredientsDetail)}
        <div>{props.dishData.instructions}</div>
        <div><a href={props.dishData.sourceUrl}> More information</a></div>
        <div>
        <button class="button" disabled = {props.isDishInMenu} onClick = {addMenuACB}>Add to menu</button>
        <button class="button" onClick = {cancelACB}>Cancel</button>
        </div>
       
    </div>
    )
}