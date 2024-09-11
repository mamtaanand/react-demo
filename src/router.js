import { createBrowserRouter } from "react-router-dom";
import Users from "./component/Users";
import Product from "./component/Product";
import Category from "./component/Category";
import Limit from "./component/Limit";
import Sort from "./component/Sort";
import AdminProduct from "./component/Admin/Product";

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
    },
    {
        path: 'single',
        element: <Single />
    },
    {
        path: '/limit',
        element: <Limit/>
    },
    {
        path: '/sort',
        element: <Sort />
    },
    {
        path: '/admin/product',
        element: <AdminProduct />
    }

])
export default Router;