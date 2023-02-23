import { useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useCountdown from "@bradgarropy/use-countdown";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import speak from "@lib/speak";
import convertStringToNumericSeconds from "@lib/convertStringToNumericSeconds";
import React from "react";

export default function Countdown({
  taskDescription = "",
  sessionLength = "",
}: {
  taskDescription?: string;
  sessionLength?: string;
}) {
  const [task, setTask] = useState(taskDescription || "");
  const [duration, setDuration] = useState(sessionLength || "");

  const [m, s] = useMemo(() => {
    const seconds = convertStringToNumericSeconds(duration);
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    if (!Number.isFinite(seconds)) return [0, 0];
    return [minutes, secondsLeft];
  }, [duration]);
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
        id="duration"
        label="Duration"
        variant="outlined"
        value={duration}
        onChange={(e) => {
          setDuration(e.target.value);
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
          {countdown.isRunning ? "Pause" : "Start"}
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
