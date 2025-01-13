import {createBrowserRouter} from "react-router";
import {MainLayout} from "../loyauts/MainLayout.tsx";


export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>
    }
]);