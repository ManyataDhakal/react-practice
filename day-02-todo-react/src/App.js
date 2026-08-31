import './App.css';
import { useState } from 'react';
import ToDoListItems from './components/ToDoListItems.js';
function App() {
  const [todolist, setTodoList]=useState([])


  const saveToDoList =(event)=>{
    const toname=event.target.toname.value;

    if(!todolist.includes(toname)) {
      const finalDolist =[...todolist, toname]
      setTodoList(finalDolist)
    }
    else{
      alert("ToDo Name Already Exists...")
    }
    event.preventDefault();
  }

  const list=todolist.map((value, index)=> {
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} 
      todolist={todolist}
      setTodoList={setTodoList}
      />
    )
  })
  return (
    <div className="App">
      <h1>ToDO List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name='toname'/> <button>Save</button>
      </form>

      <div className="outerDiv">
      <ul>
        {list}
      </ul>
      </div>
    </div>
  );
}

export default App;
