import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useCountdown from "@bradgarropy/use-countdown";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import speak from "../lib/speak";
import React from "react";

export default function Countdown({
  taskDescription = "",
  sessionLength = "",
}: {
  taskDescription?: string;
  sessionLength?: string;
}) {
  const [task, setTask] = useState(taskDescription || "");
  const [time, setTime] = useState(sessionLength || "");
  const [m, setM] = useState(() => {
    const m = sessionLength.split(":")[0];
    const mm = parseInt(m);
    return Number.isFinite(mm) ? mm : 0;
  });
  const [s, setS] = useState(() => {
    const s = sessionLength.split(":")[1];
    const ss = parseInt(s);
    return Number.isFinite(ss) ? ss : 0;
  });
  const countdown = useCountdown({
    minutes: m,
    seconds: s,
    onCompleted: () => speak("Out of time"),
  });

  return (
    <Stack spacing={2}>
      <TextField
        id="task"
        label="Task"
        variant="outlined"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
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
      <Stack direction={"row"} spacing={2}>
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
          sx={{ flexGrow: 1 }}
        >
          {countdown.isPaused || !countdown.isActive ? "Start" : "Pause"}
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            if (Number.isFinite(m) && Number.isFinite(s)) {
              countdown.reset();
              countdown.pause();
            }
          }}
          sx={{ flexGrow: 1 }}
        >
          Reset
        </Button>
      </Stack>
      <Typography variant="h1" align="center">
        {countdown.formatted}
      </Typography>
    </Stack>
  );
}
