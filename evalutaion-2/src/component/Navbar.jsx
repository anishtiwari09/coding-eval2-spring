import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/order">Order</Link>
      </div>
    </div>
  );
}
