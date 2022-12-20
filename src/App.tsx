import Countdown from "./components/Countdown";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

function App() {
  return (
    <CssBaseline>
      <Container maxWidth="sm">
        <p>What would you like to work on today? Include one task per line.</p>
        <TextField
          id="tasks"
          label="Tasks"
          variant="outlined"
          multiline
          fullWidth
        />
        {/* <Countdown /> */}
      </Container>
    </CssBaseline>
  );
}

export default App;
