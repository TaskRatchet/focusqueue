import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Flow from "./components/Flow";
import { useAuthenticatedUser } from "./lib/firebase/auth";
import AuthControls from "./components/AuthControls";

function App() {
  const user = useAuthenticatedUser();

  return (
    <CssBaseline>
      <Container maxWidth="sm">
        <AuthControls />
        {user && <Flow />}
      </Container>
    </CssBaseline>
  );
}

export default App;
