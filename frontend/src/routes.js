import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import HomePage from "./Pages/HomePage"
import ContactPage from "./Pages/ContactPage"
import DetailPage from "./Pages/DetailPage"
import ListConsolesProducts from "./Pages/ListConsolesProducts"
import ListLaptopProducts from "./Pages/ListLaptopProducts"
import ListPcProducts from "./Pages/ListPcProducts"
import ListMobailProducts from "./Pages/ListMobailProducts"
import ListCameraProducts from "./Pages/ListCameraProducts"
import ListTrendProducts from "./Pages/ListTrendProducts"
import CartPage from "./Pages/CartPage"
import Error404 from "./Pages/404"

const routes = [
    {path:'/' , element: <HomePage />},
    {path:'login/' , element: <LoginPage />},
    {path:'singup/' , element: <RegisterPage />},
    {path:'contact/' , element: <ContactPage />},
    {path:'consoles/' , element: <ListConsolesProducts />},
    {path:'laptops/' , element: <ListLaptopProducts />},
    {path:'pcs/' , element: <ListPcProducts />},
    {path:'mobails/' , element: <ListMobailProducts />},
    {path:'cameras/' , element: <ListCameraProducts />},
    {path:'trends/' , element: <ListTrendProducts />},
    {path:'cart/' , element: <CartPage />},
    {path:'product/:pk/' , element: <DetailPage />},
    {path:'/*' , element: <Error404 />},
]

export default routes