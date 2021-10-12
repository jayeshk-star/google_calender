import logo from "./logo.svg";
import "./App.css";
import Calender from "./Compoents/Calender";
import Listcard from "./Compoents/Listcard";

function App() {
  return (
    <div>
      <h1 style={{ color: "orange", textAlign: "center" }}>
        Add The Event Here
      </h1>
      <div>
        <Calender />
      </div>
    </div>
  );
}

export default App;
