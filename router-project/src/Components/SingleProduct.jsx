import React from "react";
import { useParams } from "react-router-dom";
import styles from "../Components/Navbar.module.css"



const getSingleProduct = async (product_id) => {

    try {
        
        let res = await fetch(`http://localhost:3004/data?id=${product_id}`);
        let data = await res.json();
        return data
    } 
    
    catch (error) {
     console.log("error",error)   
    }
};


function SingleProduct () {

    const {product_id} = useParams()
    const [array, setArray] = React.useState({})


    const displayProduct = async (product_id) =>{
        let res = await getSingleProduct(product_id);
        let data = res[res.length-1]
        setArray(data)
    }

    React.useEffect(() => {
        
      displayProduct(product_id)

    },[product_id]);

    return (
        <div>
            <div className="pageHeading">
            <h2>Single Product Page</h2>
            </div>

            <div className= {styles.single}>
                <img src = {array.img} alt="singleProduct" />
                <h2>{array.name}</h2>
                <h3>{array.feature}</h3>
                <h3>Price : {array.price}</h3>
                <h4>Brand : {array.Brand}</h4>
                <h5>Category : {array.category}</h5>

            </div>
        </div>
    )
    
    
}

export default SingleProduct