import { Summary } from "./summaryPresenter.jsx";
import { Sidebar }  from "./sidebarPresenter.jsx";
import {Search} from "./searchPresenter.jsx"
import {Details} from "./detailsPresenter.jsx"
import { observer } from "mobx-react-lite";

const ReactRoot = observer(   //  will be added in week 3
function ReactRoot(props){
    return (<div>
                <div><Sidebar model={props.model} /></div>
                <div><Summary model={props.model} /><Search model={props.model} /><Details model={props.model} /></div>
            </div>
           );
}
)

export { ReactRoot }
