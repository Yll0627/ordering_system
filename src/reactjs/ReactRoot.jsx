import { Summary } from "./summaryPresenter.jsx";
import { Sidebar }  from "./sidebarPresenter.jsx";
import {Search} from "/Users/fanfan6027/Documents/GitHub/yueling-zhikun-vt24-2-and-3/src/reactjs/searchPresenter.jsx"
import {Details} from "/Users/fanfan6027/Documents/GitHub/yueling-zhikun-vt24-2-and-3/src/reactjs/detailsPresenter.jsx"
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
