import { useState } from "react";
import axios from "axios";

function Complaints(){
  const [form,setForm]=useState({});
  const [data,setData]=useState([]);

  const save=async()=>{
    await axios.post("http://localhost:5000/complaints",form);
    alert("Saved");
  }

  const load=async()=>{
    const res=await axios.get("http://localhost:5000/complaints");
    setData(res.data);
  }

  return(
    <div className="card">
      <h2>Complaints</h2>

      <input placeholder="Student Name" onChange={e=>setForm({...form,studentName:e.target.value})}/>
      <input placeholder="Room Number" onChange={e=>setForm({...form,roomNumber:e.target.value})}/>
      <input placeholder="Issue" onChange={e=>setForm({...form,issue:e.target.value})}/>

      <select onChange={e=>setForm({...form,priority:e.target.value})}>
        <option>Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button onClick={save}>Save</button>
      <button onClick={load}>Load</button>

      {data.map((d,i)=>(
        <div key={i}>
          {d.studentName} | {d.roomNumber} | {d.issue} | {d.priority}
        </div>
      ))}
    </div>
  )
}
export default Complaints;