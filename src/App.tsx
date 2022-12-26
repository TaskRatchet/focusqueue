import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Flow from "./components/Flow";
import Button from "@mui/material/Button";
import { loginWithGoogle } from "./lib/firebase/auth";
import React from "react";
import useUser from "./lib/useUser";

function App() {
  const [user, setUser] = useUser();

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
                void loginWithGoogle().then((u) => setUser(u.user));
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
