import Home from "../pages/home/Home";
import NewUser from "../pages/newuser/NewUser";
import Products from "../pages/products/Products";
import UserList from "../pages/users/UserList";

const Routes = [
          { path: '/', element: <Home /> },
          { path: '/home', element: <Home /> },
          { path: '/users', element: <UserList /> },
          { path: '/newuser', element: <NewUser /> },
          { path: '/products', element: <Products/>}
]

export default Routes