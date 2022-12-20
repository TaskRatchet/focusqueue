import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  return (
    <div className="App">
      <TextField id="task" label="Task" variant="outlined" />
      <TextField
        id="time"
        label="Time"
        variant="outlined"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <Button variant="contained" onClick={() => {}}>
        Start
      </Button>
      <div>{time}</div>
    </div>
  );
}

export default App;
