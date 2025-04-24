import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/pokemon">Pokemon</Link>
    </div>
  );
}

export default App;
