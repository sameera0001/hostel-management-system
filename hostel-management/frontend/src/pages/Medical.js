import { useState } from "react";
import axios from "axios";

function Medical(){
  const [form,setForm]=useState({});
  const [data,setData]=useState([]);

  const save=async()=>{
    await axios.post("http://localhost:5000/medical",form);
    alert("Saved");
  }

  const load=async()=>{
    const res=await axios.get("http://localhost:5000/medical");
    setData(res.data);
  }

  return(
    <div className="card">
      <h2>Medical</h2>

      <input placeholder="Student Name" onChange={e=>setForm({...form,studentName:e.target.value})}/>
      <input placeholder="Problem" onChange={e=>setForm({...form,problem:e.target.value})}/>
      <input placeholder="Doctor" onChange={e=>setForm({...form,doctor:e.target.value})}/>

      <select onChange={e=>setForm({...form,status:e.target.value})}>
        <option>Status</option>
        <option>Pending</option>
        <option>Treated</option>
      </select>

      <button onClick={save}>Save</button>
      <button onClick={load}>Load</button>

      {data.map((d,i)=>(
        <div key={i}>
          {d.studentName} | {d.problem} | {d.doctor} | {d.status}
        </div>
      ))}
    </div>
  )
}
export default Medical;