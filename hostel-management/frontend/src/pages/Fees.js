import { useState } from "react";
import axios from "axios";

function Fees(){
  const [form,setForm]=useState({});
  const [data,setData]=useState([]);

  const save=async()=>{
    await axios.post("http://localhost:5000/fees",form);
    alert("Saved");
  }

  const load=async()=>{
    const res=await axios.get("http://localhost:5000/fees");
    setData(res.data);
  }

  return(
    <div className="card">
      <h2>Fees</h2>

      <input placeholder="Student Name" onChange={e=>setForm({...form,studentName:e.target.value})}/>
      <input placeholder="Room Number" onChange={e=>setForm({...form,roomNumber:e.target.value})}/>
      <input placeholder="Amount" onChange={e=>setForm({...form,amount:e.target.value})}/>

      <select onChange={e=>setForm({...form,status:e.target.value})}>
        <option>Status</option>
        <option>Paid</option>
        <option>Pending</option>
      </select>

      <button onClick={save}>Save</button>
      <button onClick={load}>Load</button>

      {data.map((d,i)=>(
        <div key={i}>
          {d.studentName} | {d.roomNumber} | ₹{d.amount} | {d.status}
        </div>
      ))}
    </div>
  )
}
export default Fees;