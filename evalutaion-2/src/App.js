import Navbar from "./component/Navbar";

import AllRouter from "./routers/allrouter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRouter />
    </div>
  );
}
