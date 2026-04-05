import { useState } from "react";
import axios from "axios";

function Notices(){
  const [title,setTitle]=useState("");
  const [message,setMessage]=useState("");
  const [data,setData]=useState([]);

  const save=async()=>{
    await axios.post("http://localhost:5000/notices",{title,message});
    const res=await axios.get("http://localhost:5000/notices");
    setData(res.data);
  }

  return (
    <div className="bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')"}}>
      <div className="card">
        <h2>📢 Notices</h2>
        <input placeholder="Title" onChange={e=>setTitle(e.target.value)}/>
        <input placeholder="Message" onChange={e=>setMessage(e.target.value)}/>
        <button onClick={save}>Submit</button>

        {data.map((d,i)=>(
          <div key={i} className="card">
            <b>{d.title}</b><br/>{d.message}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Notices;