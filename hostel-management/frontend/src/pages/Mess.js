import { useState } from "react";
import axios from "axios";

function Mess(){
  const [form,setForm]=useState({});
  const [data,setData]=useState([]);

  const save=async()=>{
    await axios.post("http://localhost:5000/mess",form);
    alert("Saved");
  }

  const load=async()=>{
    const res=await axios.get("http://localhost:5000/mess");
    setData(res.data);
  }

  return(
    <div className="card">
      <h2>Mess</h2>

      <input placeholder="Day" onChange={e=>setForm({...form,day:e.target.value})}/>

      <select onChange={e=>setForm({...form,mealType:e.target.value})}>
        <option>Meal</option>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
      </select>

      <input placeholder="Menu" onChange={e=>setForm({...form,menu:e.target.value})}/>

      <button onClick={save}>Save</button>
      <button onClick={load}>Load</button>

      {data.map((d,i)=>(
        <div key={i}>
          {d.day} | {d.mealType} | {d.menu}
        </div>
      ))}
    </div>
  )
}
export default Mess;