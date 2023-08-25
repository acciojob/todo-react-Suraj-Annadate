import React from "react"

const Display=({listdata,setListdata})=>{

    function removefunc (e,index) {
     console.log("hi",index);
        let newlist =listdata.filter((ele,ind)=>{return (index!==ind)})
        setListdata([...newlist])
    }

    return(<>
    <ul>
        {listdata.map((elem,index)=>{ return (<li key={index}>
            <span>{elem}</span> <span><button onClick={(e)=>{removefunc(e,index)}}>Delete</button></span>
            </li>)})}
            </ul>
        </>)
}

export default Display;