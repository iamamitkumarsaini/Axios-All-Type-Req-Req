const DeleteFunc = async (id) => {

    try {

        let res = await fetch (`http://localhost:3004/todos/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })        
        let data = await res.json()
        console.log(data)
    } 
    
    catch (error) {
      console.log("error",error)  
    }
}


function Delete ({id}) { 


const handleDelete = () => {

    DeleteFunc(id)
}

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default Delete