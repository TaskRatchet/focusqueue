import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Flow from "./components/Flow";
import Button from "@mui/material/Button";
import { loginWithGoogle } from "./lib/firebase/auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState<unknown>();

  return (
    <CssBaseline>
      <Container maxWidth="sm">
        <>
          {!user && (
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
