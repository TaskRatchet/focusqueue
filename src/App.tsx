import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Flow from "./components/Flow";
import { useAuthenticatedUser } from "./lib/firebase/auth";
import AuthControls from "./components/AuthControls";
import { Action, initialState, reducer, State } from "./App.reducer";
import { createContext, Dispatch, useReducer } from "react";

export const AppContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  () => {
    console.log("noop dispatch called");
  },
]);

function App() {
  const user = useAuthenticatedUser();
  const r = useReducer(reducer, initialState);

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
