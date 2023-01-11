import { useContext, useMemo, useState } from "react";
import { AppContext } from "../App";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { getBoards, getCards } from "../lib/trello";
import { useMe } from "../lib/firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function TrelloDialog() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Record<string, boolean>>({});
  const [state, dispatch] = useContext(AppContext);
  const me = useMe();
  const { data } = useQuery(
    ["boards"],
    () => {
      return typeof me?.trelloToken == "string"
        ? getBoards(me.trelloToken)
        : [];
    },
    { placeholderData: [] }
  );

  if (data === undefined) {
    throw new Error("Unreachable");
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setOpen(true);
        }}
      >
        Import from Trello
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Import from Trello</DialogTitle>
        <DialogContent>
          <FormGroup>
            {data.map((board) => (
              <FormControlLabel
                key={board.id}
                control={
                  <Checkbox
                    checked={!!items?.[board.id]}
                    onChange={(e) =>
                      setItems({ ...items, [board.id]: e.target.checked })
                    }
                  />
                }
                label={board.name}
              />
            ))}
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={async () => {
              setOpen(false);
              if (typeof me?.trelloToken !== "string") return;
              const cards = await getCards(
                me?.trelloToken,
                Object.keys(items).filter((id) => items[id])
              );
              dispatch({
                type: "appendTasks",
                payload: cards.map((c) => c.name),
              });
            }}
          >
            Import
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
