import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { State, Action } from "./Flow.reducer";
import { authenticate, getBoards, getCards } from "../lib/trello";
import { useEffect } from "react";
import { updateMe, useMe } from "../lib/firebase/firestore";

export default function Dump({
  state,
  dispatch,
}: {
  state: State;
  dispatch: React.Dispatch<Action>;
}) {
  const me = useMe();

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const token = hash.match(/token=(.*)/)?.[1];

    if (token && token !== me?.trelloToken) {
      updateMe({ trelloToken: token });
    }
  }, []);

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
          if (typeof me?.trelloToken === "string") {
            getBoards(me.trelloToken);
            getCards(me.trelloToken).then((cards) => {
              const tasks = cards.map((card: { name: string }) => card.name);
              dispatch({
                type: "setTasks",
                payload: state.tasks.join("\n") + "\n" + tasks.join("\n"),
              });
            });
          } else {
            authenticate();
          }
        }}
      >
        Import from Trello
      </Button>

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
