import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useCountdown from "@bradgarropy/use-countdown";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
    <Stack spacing={2}>
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
      <Stack>
        <Button
          variant="contained"
          onClick={() => {
            if (!countdown.isActive) {
              if (Number.isFinite(m) && Number.isFinite(s)) {
                countdown.reset();
              }
            } else {
              if (countdown.isPaused) {
                countdown.resume();
              } else {
                countdown.pause();
              }
            }
          }}
        >
          {countdown.isPaused || !countdown.isActive ? "Start" : "Pause"}
        </Button>
        <Button variant="contained">Reset</Button>
      </Stack>
      <Typography variant="h1" align="center">
        {countdown.formatted}
      </Typography>
    </Stack>
  );
}

export default App;
