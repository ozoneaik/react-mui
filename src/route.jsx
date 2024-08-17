import {createBrowserRouter} from "react-router-dom";
import DashboardPage from "./views/dashboard/page.jsx";
import OrderListPage from "./views/orders/page.jsx";
import UserManagePage from "./views/userManage/page.jsx";

export const route = createBrowserRouter([
    {path : '/',element : <DashboardPage/>},
    {path : '/orders', element : <OrderListPage/>},
    {path : '/test', element : <UserManagePage/>},
    {path : '*',element : <h1>Not Found</h1>},
])