import Countdown from "./components/Countdown";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useReducer } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

type Mode = "dump" | "estimate" | "countdown";
type Action =
  | { type: "setTasks"; payload: string }
  | { type: "setMode"; payload: Mode };
type State = { tasks: string[]; currentTask: number; mode: Mode };

const initialState: State = {
  tasks: [],
  currentTask: 0,
  mode: "dump",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "setTasks":
      return {
        ...state,
        tasks: action.payload.split("\n"),
      };
    case "setMode":
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CssBaseline>
      <Container maxWidth="sm">
        {state.mode === "dump" && (
          <>
            <p>
              What would you like to work on today? Include one task per line.
            </p>
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
        )}

        {state.mode === "estimate" && (
          <Stack spacing={2}>
            <Typography variant="h5">{state.tasks[0]}</Typography>
            <p>How long do you estimate is remaining to complete this task?</p>
            <TextField id="estimate" label="Estimate" variant="outlined" />
            <Button
              variant="contained"
              onClick={() => {
                dispatch({ type: "setMode", payload: "countdown" });
              }}
            >
              Submit
            </Button>
          </Stack>
        )}

        {/* <Countdown /> */}
      </Container>
    </CssBaseline>
  );
}

export default App;
