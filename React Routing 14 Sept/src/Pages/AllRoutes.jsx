import {Routes, Route} from "react-router-dom";
import Home from "./Home"
import AllProducts from "./AllProducts";
import ProductDetails from "./ProductDetails"
import PageNotFound from "./PageNotFound"


function AllRoutes () {

    return (

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/AllProducts" element={<AllProducts/>}></Route>
            <Route path="/AllProducts/:product_id" element={<ProductDetails/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    )
}

export default AllRoutes