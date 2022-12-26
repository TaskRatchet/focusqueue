import Countdown from "./Countdown";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useFlowReducer, { State, Action } from "./Flow.reducer";

export default function Dump({
  state,
  dispatch,
}: {
  state: State;
  dispatch: React.Dispatch<Action>;
}) {
  return (
    <>
      <p>What would you like to work on today? Include one task per line.</p>
      <TextField
        id="tasks"
        label="Tasks"
        variant="outlined"
        multiline
        fullWidth
        value={state.tasks.join("\n")}
        onChange={(e) =>
          dispatch({ type: "setTasks", payload: e.target.value })
        }
      />
      <Button
        variant="contained"
        onClick={() => {
          dispatch({ type: "setMode", payload: "estimate" });
        }}
      >
        Submit
      </Button>
    </>
  );
}
