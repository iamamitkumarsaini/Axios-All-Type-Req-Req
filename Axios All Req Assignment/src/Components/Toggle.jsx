 import styles from "./Common.module.css"   

function Toggle (props) {

    const {status,id,updatedData} = props

    const handleToggle = () =>{
    const newStatus = !status
        updatedData(newStatus,id)
        console.log(newStatus)
    }
 
    
    return(
        <div className={styles.toggleStatus}>
            <button className={styles.toggleBtn} onClick={handleToggle}>Toggle</button>
        </div>
    )
}

export default Toggle