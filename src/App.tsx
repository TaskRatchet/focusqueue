import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Flow from "./components/Flow";
import { useAuthenticatedUser } from "./lib/firebase/auth";
import AuthControls from "./components/AuthControls";
import useAppReducer, { Action, initialState, State } from "./App.reducer";
import { createContext, Dispatch } from "react";

export const AppContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  () => {},
]);

function App() {
  const user = useAuthenticatedUser();
  const r = useAppReducer();

  return (
    <CssBaseline>
      <AppContext.Provider value={r}>
        <Container maxWidth="sm">
          <AuthControls />
          {user && <Flow />}
        </Container>
      </AppContext.Provider>
    </CssBaseline>
  );
}

export default App;
