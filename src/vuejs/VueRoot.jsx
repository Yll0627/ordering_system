import { Summary }  from "./summaryPresenter.jsx";
import { Sidebar }  from "./sidebarPresenter.jsx";
import {Search} from "./searchPresenter.jsx"
import {Details} from "./detailsPresenter.jsx"
import "/src/firebaseModel.js"
import "/src/style.css"
import { createRouter, createWebHashHistory, RouterView} from "vue-router";

function makeRouter(model){
    const router=  createRouter({ 
    history: createWebHashHistory(),
    routes:[
        { path: "/", component: <Search model={model} />,},
        { path: "/search", component: <Search model={model} />,},
        { path: "/summary", component: <Summary model={model} />,},
        { path: "/details", component:  <Details model={model} />},
    ]})
    return router;
    }

function VueRoot(props){  
    return (<div class="flexParent">
                <div class="sidebar"><Sidebar model={props.model} /></div>
                <div class="mainContent"><RouterView  router={makeRouter(props.model)}/></div>
            </div>
           );
}


export { VueRoot, makeRouter}







