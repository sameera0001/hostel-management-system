import { useState } from "react";
import axios from "axios";

function Rooms(){
  const [form,setForm]=useState({});
  const [data,setData]=useState([]);

  const save=async()=>{
    await axios.post("http://localhost:5000/rooms",form);
    alert("Saved");
  }

  const load=async()=>{
    const res=await axios.get("http://localhost:5000/rooms");
    setData(res.data);
  }

  return(
    <div className="card">
      <h2>Rooms</h2>

      <input placeholder="Student Name" onChange={e=>setForm({...form,studentName:e.target.value})}/>
      <input placeholder="Room Number" onChange={e=>setForm({...form,roomNumber:e.target.value})}/>

      <select onChange={e=>setForm({...form,type:e.target.value})}>
        <option>Type</option>
        <option>Single</option>
        <option>Double</option>
        <option>Triple</option>
      </select>

      <select onChange={e=>setForm({...form,facility:e.target.value})}>
        <option>Facility</option>
        <option>AC</option>
        <option>Non-AC</option>
      </select>

      <button onClick={save}>Save</button>
      <button onClick={load}>Load</button>

      {data.map((d,i)=>(
        <div key={i}>
          {d.studentName} | {d.roomNumber} | {d.type} | {d.facility}
        </div>
      ))}
    </div>
  )
}
export default Rooms;