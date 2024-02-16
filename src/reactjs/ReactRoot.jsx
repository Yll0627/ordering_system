import { Summary } from "./summaryPresenter.jsx";
import { Sidebar }  from "./sidebarPresenter.jsx";
import {Search} from "./searchPresenter.jsx"
import {Details} from "./detailsPresenter.jsx"
import { observer } from "mobx-react-lite";
import "/src/style.css"
import { createHashRouter, RouterProvider } from 'react-router-dom';


        
    
const ReactRoot = observer(   //  will be added in week 3
function ReactRoot(props){

    const router= createHashRouter([
        {
            path: "/", 
            element: <Search model={props.model} />,
        },
        {
            path: "/search", 
            element: <Search model={props.model} />,
        },
        {
            path: "/summary", 
            element: <Summary model={props.model} />,
        },
        {
            path:"/details", 
            element: <Details model={props.model} />,
        },
       
        ])   
        

    return (<div class="flexParent">
                <div class="sidebar"><Sidebar model={props.model} /></div>
                <div class="mainContent"><RouterProvider router={router} /></div>
            </div>
           );
}
)

export { ReactRoot }
