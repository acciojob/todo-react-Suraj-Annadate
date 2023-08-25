
import React,{useState} from "react";
import './../styles/App.css';
import Display from "./Display"

const App = () => {

  let [listdata,setListdata]=useState([]);
  let [ipval,setIpval]=useState("");

  function submit (e) {
    e.preventDefault();
    setListdata([...listdata,ipval])
    setIpval("");
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h3>To-Do List</h3>
        <form onSubmit={submit}>
          <input type="text" value={ipval} onChange={(e)=>{setIpval(e.target.value)}}/>
          <button type="submit">Add-Todo</button>
        </form>
        <Display listdata={listdata} setListdata={setListdata}/>
    </div>
  )
}

export default App
