import {useState,useEffect} from "react"
import Toggle from "./Toggle";  
import Delete from "./Delete"

const getData = async (page) => {

    try {
        
        let res = await fetch(`http://localhost:3004/todos?_page=${page}&_limit=3`)
        let data = await res.json();
        return data;
    } 
    
    catch (error) {
      console.log("error",error);  
    }
}

let flag = false;

function ShowTasks () {

    const [todos,setTodos] = useState ([]); 
    const [page,setPage] = useState(1); 
    const [loading, setLoading] = useState(false)

    useEffect ( () => {
        displayTask(page);
    },[page]);
    
    
    
        const displayTask = async (page=1) => {
    
            try {
            
             setLoading(true)   
             const data = await getData(page);
             if (data.length<3){
                flag=true
             }
             else{
                flag = false;
             }

              setTodos(data)
              setLoading (false)
                
            }
            
            catch (error) {
              setLoading(false)
              console.log("error",error); 
               
            }
        }

        

        const pageChange = (changeBy) => {
            setPage(page+changeBy)
        }

        if (loading){
            return <h1>Loading Tasks...</h1>
        }



    return (
    <div>
        <h1>Show All Tasks</h1>
            
        {todos.map((tasks) =>(
    <div className=" tasks">
        <h3 key = {tasks.key} id = {tasks.id}>{tasks.title} - {tasks.status ? "Done" : "Pending"}</h3>
        {/* <button key = {tasks.id} onClick = {handleToggle}>Toggle</button>
        <button key = {tasks.id} onClick = {handleDelete}>Delete</button> */}
        <Toggle
        key1 = {tasks.id}
        key = {tasks.key}
        status = {tasks.status}
        />

        <Delete
        id = {tasks.id}
        key = {tasks.id}
        />
    </div>
 ))}

    <button disabled = {page===1} onClick = { () => pageChange(-1)}>Previous</button>
    <button disabled = {flag}  onClick = { () => pageChange(1)}>Next</button>

            </div>
        )

}

export default ShowTasks;