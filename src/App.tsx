import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useCountdown from "@bradgarropy/use-countdown";

function App() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);
  const countdown = useCountdown({
    minutes: m,
    seconds: s,
  });

  return (
    <div className="App">
      <TextField id="task" label="Task" variant="outlined" />
      <TextField
        id="time"
        label="Time"
        variant="outlined"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          const [m, s] = e.target.value.split(":");
          setM(parseInt(m));
          setS(parseInt(s));
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          if (Number.isFinite(m) && Number.isFinite(s)) {
            countdown.reset();
          }
        }}
      >
        Start
      </Button>
      <div>{countdown.formatted}</div>
    </div>
  );
}

export default App;
