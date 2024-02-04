import { Summary } from "./summaryPresenter.jsx";
import { Sidebar }  from "./sidebarPresenter.jsx";
import { observer } from "mobx-react-lite";

const ReactRoot = observer(   //  will be added in week 3
function ReactRoot(props){
    return (<div>
                <div><Sidebar model={props.model} /></div>
                <div><Summary model={props.model} /></div>
            </div>
           );
}
)

export { ReactRoot }
