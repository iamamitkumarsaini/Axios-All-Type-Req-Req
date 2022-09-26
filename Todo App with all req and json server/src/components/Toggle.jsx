const ToggleStatus = async (id,newStatus) =>{

    let newData = {
        status:newStatus
    }
    try {


        let res = await fetch (`http://localhost:3004/todos/${id}`,{
        method:"PATCH",
        body:JSON.stringify(newData),
        headers:{
            "Content-Type":"application/json"
        },
    })

    let data = await res.json();
    console.log(data)
        
    } 
    
    catch (error) {
       console.log("error",error); 
    }
}

function Toggle ({key1,status}) {

    const handleToggle = () => {
        let newStatus = !status;
        ToggleStatus(key1,newStatus)

    }

return (
    <button onClick={handleToggle}>Toggle</button>

)

};

export default Toggle;


