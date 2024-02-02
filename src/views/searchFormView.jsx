
export function SearchFormView(props) {

    const textValue = props.text || ""
    const typeValue = props.type || ""

    return(
        <div>
            
            <input onChange={textboxACB} placeholder="Search"  type="search" value={textValue} role="textbox"></input>
            <select onChange={selectACB}>
            <option value= {typeValue}>Choose:</option>
                {props.dishTypeOptions.map(selecting)}
            </select>
            <button onClick={searchACB} >Search</button>
            <button onClick ={summaryACB}>Summary</button>
            
        </div>
        
        
    )

    function textboxACB(event){
        props.searchTextbox(event.target.value); 
    }

    function selecting(string) {
        return <option value={string}>{string}</option>

    }


    function selectACB(event){
        props.selectingOps(event.target.value);
    }

    function searchACB(){
        props.search()
    }
    function summaryACB(){
        window.location.hash="#summary"
    }
}