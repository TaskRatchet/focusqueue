import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Flow from "./components/Flow";
import Button from "@mui/material/Button";
import { loginWithGoogle } from "./lib/firebase/auth";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [user, setUser] = useLocalStorageState("user");

  return (
    <CssBaseline>
      <Container maxWidth="sm">
        <>
          {user ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setUser(undefined);
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                loginWithGoogle().then((user) => setUser(user as unknown));
              }}
            >
              Login with Google
            </Button>
          )}
          {user && <Flow />}
        </>
      </Container>
    </CssBaseline>
  );
}

export default App;
