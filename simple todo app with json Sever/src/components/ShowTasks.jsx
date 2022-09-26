import {useState,useEffect} from "react"

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
            <div>
                {todos.map((tasks) =>(
                    <h3 key = {tasks.id}>{tasks.title}</h3>
                ))}
            </div>

            <button disabled = {page===1} onClick = { () => pageChange(-1)}>Previous</button>
            <button onClick = { () => pageChange(1)}>Next</button>

            </div>
        )

}

export default ShowTasks;