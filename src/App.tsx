import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <div className="App">
      <TextField id="task" label="Task" variant="outlined" />
    </div>
  );
}

export default App;
