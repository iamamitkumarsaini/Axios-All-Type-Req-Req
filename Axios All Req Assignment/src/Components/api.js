import axios from "axios"

export const addTask = async (text = {}) => {
    console.log(text)
    let res = await axios.post(`http://localhost:3004/todos`,{
        title:text.title,  //Whatever value store in text={} put it here.
        status:text.status,
    })

    return res;
};


export const getData = async (params={}) => {
    try {
        let res = await axios(`http://localhost:3004/todos`,{
            params:{
                _page:params.page,
                _limit:params.limit,
            }
        })

        return res;
    } 
    
    catch (error) {
     console.log("error",error);   
    }
}

export const updateData = async (newstatus,id) => {
    const params = {status:newstatus}
    try {
        
        let res = await axios.patch(`http://localhost:3004/todos/${id}`,params)
        return res;
    } 
    
    catch (error) {
      console.log("error",error)  
    }
}


export const delteteTaskFunc = async (id) =>{

    try {
        
        let res = await axios.delete(`http://localhost:3004/todos/${id}`)
        return res
    } 
    
    catch (error) {
     console.log("error",error)   
    }
}

export const modifyTaskbyPAtchReq = async(id,text) => {

    const params = {title:text}

    try {

        let res = await axios.patch(`http://localhost:3004/todos/${id}`,params)
        return res;
    } 
    
    catch (error) {
        console.log("error",error);
    }
}