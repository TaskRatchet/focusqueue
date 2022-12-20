import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <TextField id="task" label="Task" variant="outlined" />
      <TextField id="time" label="Time" variant="outlined" />
      <Button variant="contained" onClick={() => {}}>
        Start
      </Button>
    </div>
  );
}

export default App;
