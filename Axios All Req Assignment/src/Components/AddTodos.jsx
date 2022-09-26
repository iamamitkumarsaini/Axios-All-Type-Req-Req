import { useState } from "react"
import styles from "./Common.module.css"

function AddTodos ({onAddTasks}) {

    const [text,setText] = useState({});

const handleChange = (e) => {
    const title  = e.target.value;

  setText({
   title,
   status:false,
  })
};
const takeAwayvalue = () => {
    onAddTasks(text)
};


    return(
        <div>
           <input className={styles.inputBox} type="text" placeholder="Add Tasks" value={text.name} onChange={handleChange}></input><br />
           <button className={styles.AddtaskBtn} onClick={takeAwayvalue}>Add</button>

        </div>
    )
}

export default AddTodos;







// When You have Multiple input boxes and you want to use only a single onChange function for all the input
// boxes. then you can use the below method. It will save your so much of time.

// Step-1 const [formData, setFormData] = React.useState({
// name:"",
// username:"",
// email:"",
// password:"",
// number:"",
// })

// Step-2 give same onChange function to all input boxes

// <input name="name" type="text" placeholder="Add Your Name" value={text.name} onChange={handleChange}></input><br />
// <input name="username" type="text" placeholder="Add Username" value={text.username} onChange={handleChange}></input><br />
// <input name="email" type="email" placeholder="Add Email" value={text.email} onChange={handleChange}></input><br />
// <input name="password" type="password" placeholder="Password Tasks" value={text.password} onChange={handleChange}></input><br />
// <input name="number" type="number" placeholder="Add Number" value={text.number} onChange={handleChange}></input><br />


// Step-3 Define the Function 

// const handleChange = (e) => {
// const { name,type,value} = e.target;
// const val = type==="number" ? Number(value) : value;

// setFormData({
// ...formData
// [name]:val   
// });

// }



// Step-4 How to Write in Function using axios

// export const sendData = async (params = {}) => {
//  try {
//    let res = await axios.post(`http://localhost:3004/todos`, {
//     name:params.name,
//     username:params.username,
//     email:params.email
//     password:params.password,    
//     number:params.number,  
// })

// }  

// }


// That's all. Enjoy!