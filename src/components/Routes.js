import Home from "../pages/home/Home";
import NewUser from "../pages/newuser/NewUser";
import Product from "../pages/product/Product";
import Products from "../pages/products/Products";
import UserList from "../pages/users/UserList";

const routes = [
          { path: '/', element: <Home /> },
          { path: '/home', element: <Home /> },
          { path: '/users', element: <UserList /> },
          { path: '/newuser', element: <NewUser /> },
          { path: '/products', element: <Products /> },
          { path: '/products/:productID', element: <Product/>}
]

export default routes