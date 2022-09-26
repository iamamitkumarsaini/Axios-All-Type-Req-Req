import { useState, useEffect } from "react";
import AddTodos from "./AddTodos";
import { addTask, getData, updateData, delteteTaskFunc, modifyTaskbyPAtchReq } from "./api";
import Toggle from "./Toggle";
import Delete from "./Delete";
import ModifyTask from "./ModifyTask";
import styles from "./Common.module.css"

function Todos () {

    const [arr,setArr] = useState([]);
    const [page,setPage] = useState(1);
    const [pageLimit,setPageLimit] = useState(1)

    const getAndUpdateData = async (page) => {
        try {
            let res = await getData({page,limit:3,})
            setArr(res.data);
            setPageLimit(res.headers["x-total-count"])
        } 
        
        catch (error) {
         console.log("error",error)   
        }
    }


    useEffect(() => {
        getAndUpdateData(page)
    },[page])

    

    const handleAddTasks = async(text) => {
    await addTask(text);
    getAndUpdateData(page)
    alert("task Added Successfully")
    } 

    const displayToggle = async (newstatus,id) => {
      await updateData(newstatus,id)
      getAndUpdateData(page)
    }

    const deleteTask = async (id) => {
     await delteteTaskFunc(id)
     getAndUpdateData(page)
    }

    const modifyTaskFunc = async (id,text)=>{

      await modifyTaskbyPAtchReq(id,text)
      getAndUpdateData(page)
    }


    return (
        <div>
          <div>
            <h1 className={styles.header}>Todos</h1>
            <AddTodos onAddTasks={handleAddTasks}/>
          </div>
          <div>
          {arr.map((elem) => (
          <div key={elem.id} className={styles.singleDiv}>
                <h3>{elem.title} - {elem.status ? "Done" : "Pending"}</h3>
                <Toggle
                status={elem.status}
                id={elem.id}
                updatedData={displayToggle}
                />

                <Delete
                id={elem.id}
                onDeleteFunc = {deleteTask} />

                <ModifyTask
                id={elem.id}
                editFunc={modifyTaskFunc}
                />

          </div>
          ))}

          <div>
            <button disabled={page===1} onClick={() => setPage(page-1)} className={styles.pageBtn}>Prev</button>
            <button className={styles.pageBtn}>{page}</button>
            <button disabled={ page===Math.ceil(pageLimit/3) } onClick={() => setPage(page+1)}
            className={styles.pageBtn}
            >Next</button>
          </div>
          </div>
        </div>
    )
}

export default Todos