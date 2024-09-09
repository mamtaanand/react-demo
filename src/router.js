import { createBrowserRouter } from "react-router-dom";
import Users from "./component/Users";
import Product from "./component/Product";
import Category from "./component/Category";

const Router = createBrowserRouter([
    {
        path: '/users',
        element: <Users />
    },
    {
        path: '/product',
        element: <Product />
    },   
    {
        path: '/category',
        element: <Category />
    }
])
export default Router;