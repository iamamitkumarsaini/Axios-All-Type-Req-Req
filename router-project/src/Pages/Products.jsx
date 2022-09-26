import React, {useContext, useState,useEffect} from "react";
import ImageSlider from "../Components/Slider";
import { AuthContext } from "../Context/AuthContext";
import styles from "../Components/Navbar.module.css"
import { useNavigate, useSearchParams, Navigate } from "react-router-dom";


const getData = async (page) => {

    try {
        
        let res = await fetch(`http://localhost:3004/data?_page=${page}&_limit=6`);
        let data = await res.json()
        return data;
    } 
    
    catch (error) {
     console.log("error",error)   
    }
};

const sortedData = async (page,orderBy,sort) =>{

    try {

        let res = await fetch(`http://localhost:3004/data?_page=${page}&_limit=6&_sort=${sort}&_order=${orderBy}`);
        let data = await res.json();
        return data;
    } 
    
    catch (error) {
     console.log("error",error)   
    }
}


const getCurrentUrl = (value) => {             //value = page
   value = Number(value);

   if (typeof value === "number" && value <=0){
       value = 1;
   }

   if (!value){
    value = 1;
   }

   return value;
}



function Products () {
    const [searchParams,setSearchParams] = useSearchParams();
    const {isAuth, toggleAuth} = useContext(AuthContext);   
    const [arr, setArr] = useState([]);
    const [page,setPage] = useState(getCurrentUrl(searchParams.get("page")) || 1)
    const [orderBy, setOrderBy] = useState("")
// getCuurentUrl is a function by developer and searchParams.get is inbuilt function from
// react router dom libary which retrive data(info) of page from url

    let navigate = useNavigate()
    const sort = "price";

    const displayData = async (page) => {
        try {
            let res = await getData(page);
             setArr(res)
        } 
        
        catch (error) {
         console.log("error",error)   
        }
    }

    const displaySortedData = async (page,orderBy,sort) => {
        try {
            let res = await sortedData(page,orderBy,sort);
             setArr(res)
        } 
        
        catch (error) {
         console.log("error",error)   
        }
    }

    useEffect(() => {
        if (orderBy){
            displaySortedData(page,orderBy,sort)
        }
        else{
            displayData(page)
        }
    },[page,orderBy])


    useEffect(() => {
        let paramsObj = {page}   // Writing page no in object

        if (orderBy){
            paramsObj.orderBy = orderBy;
        }
        setSearchParams(paramsObj)
    },[page,orderBy])


    const addToCart = (id) => {
        

    }

    const displayDetails = (product_id) => {
        console.group(product_id)
        let path = `/products/${product_id}`
        navigate(path)
    }


    if (!isAuth){
        return <Navigate to= "/" />
    }


    return(
    <div>

        <div className={styles.headline}>
          <div className={styles.Productpage}>
             <h2>Products</h2>
          </div>
           <div className={styles.logoutBtn}>
              <button onClick={toggleAuth}>Sign-Out</button>
           </div>
        </div>  

        <div>
            <button onClick={() => setOrderBy("asc")}>Order by Price - Ascending</button>
            <button onClick={() => setOrderBy("desc")}>Order by Price - descending</button>
            <button onClick={() => setOrderBy("")}>Reset</button>
          </div>         

        <div>
            <ImageSlider/>
        </div>
        <div>
        <div className = {styles.Prodcontainer}>
            {arr ?.map((elem) => (

            <div>
                <div className = {styles.card} key= {elem.id} id = {elem.id} onClick={ () => displayDetails(elem.id)}>
                    <img src={elem.img} alt="E-CommerceWebsite" />
                    <h3>{elem.name}</h3>
                    <h3>Price : {elem.price} ₹</h3>
                    <h4>Brand : {elem.Brand}</h4>
                    <h4>Category : {elem.category}</h4>
                </div>
                
                <div>
                    <button key={elem.id} onClick={ () => addToCart(elem.id)}>Add to Cart</button>
                </div>

                </div>

            ))}
        </div>
        </div>

        <div className={styles.buttons}>
        <button disabled = {page===1} onClick={() => setPage(page-1)}>Prev</button>
        <button>{page}</button>
        <button disabled = {page===5} onClick={() => setPage(page+1)}>Next</button>
        </div>
    </div>
    )
}

export default Products;