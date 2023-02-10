import react from "react";
import { Button, Input } from "@mui/material";
import { updateMe, useMe } from "../lib/firebase/firestore";

const redirectUri = "http://localhost:5173/settings";
const clientId = "3yyb3d0ywheam1gjui40gn4eh";
const url = `https://www.beeminder.com/apps/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;

const params = new URLSearchParams(window.location.search);
const token = params.get("access_token");
const username = params.get("username");

if (token && username) {
  // store token and username in firebase
  updateMe({ beeminderToken: token, beeminderUsername: username });
}

export default function Settings() {
  const me = useMe();

  return me?.beeminderUsername ? (
    <>Beeminder User: {me.beeminderUsername}</>
  ) : (
    <Button href={url}>Authorize app with Beeminder</Button>
  );
}

// Show authenticated Beeminder username
// Show an input to allow user to specify goalname
// Store goalname in firestore
