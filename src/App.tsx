import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Flow from "./components/Flow";
import { useAuthenticatedUser } from "./lib/firebase/auth";
import AuthControls from "./components/AuthControls";
import { Action, initialState, reducer, State } from "./App.reducer";
import { createContext, Dispatch, useReducer } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authenticated from "./components/Authenticated";

const queryClient = new QueryClient();

export const AppContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  () => {
    console.log("noop dispatch called");
  },
]);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authenticated>
        <Flow />
      </Authenticated>
    ),
  },
]);

function App() {
  const user = useAuthenticatedUser();
  const r = useReducer(reducer, initialState);

  return (
    <CssBaseline>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={r}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Focusqueue
              </Typography>
              <AuthControls />
            </Toolbar>
          </AppBar>

          <Container maxWidth="sm">
            <RouterProvider router={router} />
          </Container>
        </AppContext.Provider>
      </QueryClientProvider>
    </CssBaseline>
  );
}

export default App;
