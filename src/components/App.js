
import React,{useState} from "react";
import './../styles/App.css';


const App = () => {
  let [values,setvalue]=useState("");
  let [AllTodoValues,setAllTodoValues]=useState([]);
  let [dynamicId,setdynamicId]=useState(1);

  function enterTodo(e){
    setvalue(e.target.value);
  }
  function AddTodo(e)
  {
       e.preventDefault();
      setAllTodoValues([...AllTodoValues,{id:dynamicId,tittle:values}]);
      setdynamicId(dynamicId+1);
      setvalue("");
  }

  function deleteitem(id)
  {
       setAllTodoValues(AllTodoValues.filter((item)=>{
          if(item.id!=id)
          {
            return item;
          }
       }))
  }
  return (
    
    <div>
        <form onSubmit={AddTodo}>
          <input type="text" placeholder="enter todo" onChange={enterTodo} value={values}/>
          <button type="submit">Add Task</button>
        </form>
        <ul>
         {
           AllTodoValues.map((item)=>{
            return <li>
              <p>{item.tittle}</p>
              <button onClick={()=>{deleteitem(item.id)}}>Delete</button>
            </li>
           })
         }
        </ul>
    </div>
  )
}

export default App
