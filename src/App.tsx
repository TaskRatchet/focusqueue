import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Flow from "./components/Flow";
import Button from "@mui/material/Button";
import { loginWithGoogle } from "./lib/firebase/auth";

function App() {
  return (
    <CssBaseline>
      <Container maxWidth="sm">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            loginWithGoogle();
          }}
        >
          Login with Google
        </Button>
        <Flow />
      </Container>
    </CssBaseline>
  );
}

export default App;
