import { Summary }  from "./summaryPresenter.jsx";
import { Sidebar }  from "./sidebarPresenter.jsx";

function VueRoot(props){
    return (<div>
                <div><Sidebar model={props.model} /></div>
                <div><Summary model={props.model} /></div>
            </div>
           );
}

export { VueRoot }

