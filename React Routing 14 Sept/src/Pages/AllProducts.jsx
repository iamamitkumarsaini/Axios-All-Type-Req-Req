import React from "react"
import {Link} from "react-router-dom"


const getData = async() => {

    try {
        
        let res = await fetch (` http://localhost:3004/data`);
        let data = await res.json();
        return data;
    } 
    catch (error) {
     console.log("Error",error)   
    }
}

function AllProducts () {
const [array, setArray] = React.useState([]);

const displayData = async() => {
    
    try {

        const data = await getData();
        setArray(data)
        
    } catch (error) {
       console.log("Error",error) 
    }

}

React.useEffect(() => {
displayData()
},[])
    return (
    <div>

        <div>
            <h2>All Products</h2>
        </div>

        <div id = "products">
            {array.map((elem) => (
                <div key={elem.id}>
                    <div>
                    <img src={elem.image} alt="iphones" />
                    </div>

                    <div>
                    <h2>Category : {elem.category}</h2>
                    <Link to={`/AllProducts/${elem.id}`}>More Details</Link>
                    </div>
                </div>
            ))}
        </div>

    </div>
    )
}

export default AllProducts