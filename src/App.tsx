import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Flow from "./components/Flow";
import Button from "@mui/material/Button";
import {
  loginWithGoogle,
  useAuthenticatedUser,
  logout,
} from "./lib/firebase/auth";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const user = useAuthenticatedUser();

  return (
    <CssBaseline>
      <Container maxWidth="sm">
        <>
          {user ? (
            <Button variant="contained" color="primary" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                loginWithGoogle();
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
