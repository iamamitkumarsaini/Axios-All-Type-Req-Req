import { useState } from "react";

function GetTodo () {

    const [postArr, setPostArr] = useState([]);
    const [text, setText] = useState("");

    const getPost = async() => {

        try {

            let res = await fetch (`http://localhost:3004/posts`);
            let data = await res.json();

            setPostArr(data)
            console.log(data)
            
        } 
        
        catch (error) {
          console.log("error",error);  
        }
    }

    const handleChange =  (e) => {
        setText(e.target.value);
    };

    const postTodos = async () => {

        const postObj = {
            title:text,
            status:false,
        }

        try {
            
            let res = await fetch(`http://localhost:3004/posts`,{
                method:"POST",
                body:JSON.stringify(postObj),
                headers:{
                    "Content-Type":"application/json"
                },
            });

            let data = await res.json()

            console.log(data)
            
            
        } 
        
        catch (error) {
          console.log("Error",error);  
        }

        getPost()
    }






    return (
        <div>
            <button onClick= {getPost}>Get Tasks</button><br /><br />
            <input type="text" value={text} onChange={handleChange}/>
            <button onClick={postTodos}>Add Task</button>
            {postArr.map((posts) => (
                <h3 key = {posts.id}>{posts.title} - {posts.status ? "Done" : "Pending"}</h3>
            ))}
        </div>
    )
}


export default GetTodo;