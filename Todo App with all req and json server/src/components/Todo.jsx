import AddTodo from "./AddTodo.jsx";

function Todo () { 

let handelAddTodo = async (text) => {
    const taskObj = {
        title:text,
        status:false,
    }

    console.log(taskObj)

    try {
        
    let res = await fetch("http://localhost:3004/todos", {
        method:"POST",
        body: JSON.stringify(taskObj),

        headers:{
            "content-type":"application/json"
        },
    })

    let data = await res.json()

    } 
    
    
    catch (error) {
        console.log("error",error);
    }
};

return (
<div>
    <div>
        <AddTodo handelAddTodo={handelAddTodo}/>
        </div>
    </div>

)
    
}


export default Todo