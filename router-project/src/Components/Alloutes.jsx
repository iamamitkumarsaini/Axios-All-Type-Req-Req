import { Routes, Route } from "react-router-dom"

import About from "../Pages/About"
import Cart from "../Pages/Cart"
import Contact from "../Pages/Contact"
import FaqPage from "../Pages/FAQ_Page"
import Home from "../Pages/Home"
import NotFound from "../Pages/NotFound"
import Products from "../Pages/Products"
import SignIn from "../Pages/SignIn"
import SingleProduct from "./SingleProduct"
import PrivateRoute from "./PrivateRoute"


function ALlRoutes () {

    return (
        <Routes>

            <Route path="/" element={<Home/>}></Route>
            <Route path="/Products" element={ <PrivateRoute><Products/></PrivateRoute>}></Route>
            <Route path="/cart" element={ <PrivateRoute><Cart/></PrivateRoute>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/faqpage" element={<FaqPage/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/notfound" element={<NotFound/>}></Route>
            <Route path="/products/:product_id" element={ <PrivateRoute><SingleProduct/></PrivateRoute>}></Route>

        </Routes>
    )
}

export default ALlRoutes;