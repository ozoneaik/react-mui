import {createRoot} from 'react-dom/client'
import './index.css'
import {route} from "./route.jsx";
import {RouterProvider} from "react-router-dom";


createRoot(document.getElementById('root')).render(
    <RouterProvider router={route}/>
)
