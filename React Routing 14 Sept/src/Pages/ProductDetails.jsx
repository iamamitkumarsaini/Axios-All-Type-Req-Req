import React from "react";
import { useParams, Link } from "react-router-dom";


const getData = async (product_id) =>{

    try {

        let res = await fetch(`http://localhost:3004/data?id=${product_id}`);
        let data = await res.json();
        data = data[data.length-1];

        return data;
        
    } 
    
    catch (error) {
     console.log("error",error);   
    }
}


const ProductDetails = () =>{

    const { product_id } = useParams();
    const [obj, setObj] = React.useState({});

    const displayProduct = async (product_id) => {
        try {

            let res = await getData(product_id);
            setObj(res);
            
        } 
        catch (error) {
          console.log("error",error);  
        }
    }

    React.useEffect(() => {
        displayProduct(product_id);
    },[product_id]);

    return (
        <div>
            <div>
            <h2>Product Details</h2>
            </div>
            <div>
                <img src={obj.image} alt="product_picture" />
                <h2>Name : {obj.name}</h2>
                <h3>Price : {obj.price} ₹</h3>
                <h4>Category : {obj.category}</h4>
            </div>

        </div>
        
    )
}

export default ProductDetails