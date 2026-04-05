import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setU] = useState("");
  const [password, setP] = useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:5000/login", { username, password });

    if (res.data.success) window.location = "/dashboard";
    else alert("Wrong login ❌");
  };

  return (
    <div className="bg" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511')"
    }}>
      <div className="card">
        <h2>🏨 Hostel Login</h2>
        <input placeholder="Username" onChange={e => setU(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setP(e.target.value)} />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
export default Login;