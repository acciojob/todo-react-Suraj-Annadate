
import React, { useState } from "react";
import './../styles/App.css';

  const App = () =>{
        
      let [list,setList] = useState([]);
      let [item,setItem] = useState("");
      
        function addingItem(e){
            setItem(e.target.value);
        }

        function addtolist(){
              setList([...list,item]); 
              setItem('');      
        }

        function removeitem(itemName){
          const updatedTodoList = list.filter((item)=>item !== itemName);
               setList(updatedTodoList);
        }

    return (
        <div>
          <div>
              <h1>To-Do List</h1>
              <input type="text" onChange={addingItem} value={item}/>
              <button onClick={addtolist}>Add Todo</button>
          </div>
          {
            list && list.map((items,index)=>(
                <div key={index}>
                    <span className="itemName">{items}</span>
                     {console.log(items)}
                    <button onClick={() =>removeitem(items)}>Delete</button>
                </div>
              ))
          }
        </div>
    )
  }
  export default App;
