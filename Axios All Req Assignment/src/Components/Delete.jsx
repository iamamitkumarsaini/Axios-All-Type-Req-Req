import styles from "./Common.module.css";


function Delete ({id,onDeleteFunc}) {

    const deleteFunc = () =>{
        onDeleteFunc(id)
    }

    return(
        <div>
            <button className={styles.deleteBtn} onClick={deleteFunc}>Delete</button>
        </div>
    )
}

export default Delete