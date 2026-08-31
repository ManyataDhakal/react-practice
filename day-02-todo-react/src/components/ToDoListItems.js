import { useState } from "react";
function ToDoListItems({value, key, indexNumber, todolist, setTodoList}){
    const [status, setStatus] = useState(false);
    const deleteRow=()=> {
        const finalData=todolist.filter((v,i)=>i !== indexNumber);
        setTodoList(finalData);
    }

    const checkStatus=()=>{
        setStatus(!status)
    }
    
    return(
        <li className={(status) ? 'completetodo': ''} onClick={checkStatus}>{value}<span onClick={deleteRow}>&times;</span></li>
    )
}
export default ToDoListItems;