import {
    createBrowserRouter
  } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home";
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";
import ShopPage from "../pages/shop/ShopPage";
import SingeProducts from "../pages/shop/productDetails/SingeProducts";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/categories/:categoryName",
          element: <CategoryPage/>
        },
        {
          path: "/search",
          element: <Search/>
        },
        {
          path: "/shop",
          element: <ShopPage/>
        },
        {
          path: "/shop/:id",
          element: <SingeProducts/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ]);

  export default router;