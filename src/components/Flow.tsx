import Countdown from "./Countdown";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Dump from "./Dump";
import { useContext } from "react";
import { AppContext } from "../App";

function Flow() {
  const [state, dispatch] = useContext(AppContext);

  switch (state.mode) {
    case "dump":
      return <Dump state={state} dispatch={dispatch} />;
    case "estimate":
      return (
        <Stack spacing={2}>
          <Typography variant="h5">{state.tasks[state.currentTask]}</Typography>

          <p>
            How How How long do you estimate is remaining to complete this task?
          </p>

          <TextField
            id="estimate"
            label="Estimated Time Remaining"
            variant="outlined"
          />

          <p>How long would you like to spend on this task now?</p>

          <TextField
            id="time"
            label="Session Length"
            variant="outlined"
            value={state.sessionLength}
            onChange={(e) =>
              dispatch({ type: "setSessionLength", payload: e.target.value })
            }
          />
          <div>
            <Button
              variant="contained"
              onClick={() => {
                dispatch({ type: "setMode", payload: "countdown" });
              }}
            >
              Submit
            </Button>
          </div>
        </Stack>
      );
    case "countdown":
      return (
        <>
          <Countdown
            taskDescription={state.tasks[0] || ""}
            sessionLength={state.sessionLength}
          />
          <Button
            variant="contained"
            onClick={() => {
              dispatch({ type: "setMode", payload: "review" });
            }}
          >
            Finish session
          </Button>
        </>
      );
    case "review":
      return (
        <Stack spacing={2}>
          <Button
            variant="contained"
            onClick={() => {
              dispatch({ type: "completeTask" });
            }}
          >
            Mark task as complete
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              dispatch({ type: "setMode", payload: "estimate" });
            }}
          >
            Keep working on the same task
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              dispatch({ type: "nextTask" });
            }}
          >
            Move on to the next task
          </Button>
        </Stack>
      );
    default:
      throw new Error("Invalid mode");
  }
}

export default Flow;
