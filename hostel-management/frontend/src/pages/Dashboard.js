import { useState } from "react";
import Rooms from "./Rooms";
import Complaints from "./Complaints";
import Fees from "./Fees";
import Mess from "./Mess";
import Notices from "./Notices";
import Medical from "./Medical";

function Dashboard() {
  const [tab, setTab] = useState("");

  return (
    <div className="bg" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c')"
    }}>
      <h1 style={{color:"white"}}>📊 Dashboard</h1>

      <div>
        <button onClick={()=>setTab("rooms")}>Rooms</button>
        <button onClick={()=>setTab("complaints")}>Complaints</button>
        <button onClick={()=>setTab("fees")}>Fees</button>
        <button onClick={()=>setTab("mess")}>Mess</button>
        <button onClick={()=>setTab("notices")}>Notices</button>
        <button onClick={()=>setTab("medical")}>Medical</button>
      </div>

      {tab==="rooms" && <Rooms/>}
      {tab==="complaints" && <Complaints/>}
      {tab==="fees" && <Fees/>}
      {tab==="mess" && <Mess/>}
      {tab==="notices" && <Notices/>}
      {tab==="medical" && <Medical/>}
    </div>
  );
}
export default Dashboard;