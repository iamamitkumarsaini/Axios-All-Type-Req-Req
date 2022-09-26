import {useState} from "react"

function AddTodo ({handelAddTodo}) {
    const [text,setText] = useState("");
    
    const handelChange = (e) => {
        setText(e.target.value);
    }

    function onClick () {
        handelAddTodo (text);
        setText ("")
    }


    return (
    <div>
        <input type="text" placeholder = "Add Tasks" value={text} onChange={handelChange}></input>
        <button onClick={onClick}>Add</button>
    </div>
    )
}

export default AddTodo