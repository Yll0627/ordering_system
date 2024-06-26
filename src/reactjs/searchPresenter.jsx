import { SearchResultsView } from "../views/searchResultsView.jsx";
import { SearchFormView } from "../views/searchFormView.jsx";
import { observer } from "mobx-react-lite";

const Search = observer(
function Search(props) {


    const dishTypeOptions = ["starter", "main course", "dessert"];

    /*
    if (!props.model.searchResultsPromiseState.promise) {
       props.model.doSearch(props.model.searchParams);
    }
    */


    function searchTextACB(text) {
        props.model.setSearchQuery(text);
    }

    function searchTypeACB(type) {
        props.model.setSearchType(type);
    }

    function searchNowACB() {
        props.model.doSearch(props.model.searchParams);
    }


    function usersChosenDishACB(dish) {
        props.model.setCurrentDishId(dish.id);
    }

    function renderSearchResults() {
        const promiseState = props.model.searchResultsPromiseState;
        if (!promiseState.promise) {
            return <div>no data</div>;
        }
        if (!promiseState.data && !promiseState.error) {
            return <img className="imageForLoading" src="https://brfenergi.se/iprog/loading.gif" alt="Loading" />;
        }
        if (promiseState.promise && promiseState.error) {
            return <div>{promiseState.error.toString()}</div>;
        }

        return <SearchResultsView searchResults={promiseState.data || []}  dishes={props.model.dishes} chosenDish={usersChosenDishACB} />
        
    
    }


    return (
        <div>
            <SearchFormView dishTypeOptions={dishTypeOptions}
                            text={props.model.searchParams.query}
                            type={props.model.searchParams.type}
                            searchTextbox={searchTextACB} 
                            selectingOps={searchTypeACB}
                            search={searchNowACB}
                            ></SearchFormView>
            {renderSearchResults()}
        </div>
    );
}
)

export { Search };
