import react, { useEffect, useState } from "react";
import { Button, Input } from "@mui/material";
import { updateMe, useMe } from "@services/firebase/firestore";
import { useMutation } from "@tanstack/react-query";
import LoadingButton from "@mui/lab/LoadingButton";
import withAuth from "../lib/withAuth";

const redirectUri = "http://localhost:5173/settings";
const clientId = "3yyb3d0ywheam1gjui40gn4eh";
const url = `https://www.beeminder.com/apps/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;

const params = new URLSearchParams(window.location.search);
const token = params.get("access_token");
const username = params.get("username");

function Settings() {
  const me = useMe();
  const [goalname, setGoalname] = useState(me?.beeminderGoalname || "");

  const { mutate: save, isLoading } = useMutation({
    mutationFn: () => updateMe({ beeminderGoalname: goalname }),
  });

  useEffect(() => {
    if (token && username) {
      updateMe({ beeminderToken: token, beeminderUsername: username });
    }
    setGoalname(me?.beeminderGoalname || "");
  }, [me]);

  return me?.beeminderUsername ? (
    <>
      <p>Beeminder User: {me.beeminderUsername as string}</p>

      <Input
        placeholder="Goalname"
        value={goalname}
        onChange={(e) => setGoalname(e.target.value)}
      />

      <LoadingButton
        loading={isLoading}
        variant={"outlined"}
        onClick={() => save()}
      >
        Save
      </LoadingButton>

      <p>
        In the future, Focusqueue will post datapoints to your Beeminder goal as
        you finish sessions.
      </p>
    </>
  ) : (
    <Button href={url}>Authorize app with Beeminder</Button>
  );
}

export default withAuth(Settings);
