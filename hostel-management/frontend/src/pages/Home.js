import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Link to="/room">Room Allocation</Link>
    </div>
  );
}

export default Home;