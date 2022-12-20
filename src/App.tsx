import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import getProjectsList from "./lib/taiga/getProjectsList";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import login from "./lib/taiga/login";
import {
  useQuery,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");

  const { mutate, data: token } = useMutation(
    (d: { user: string; pass: string }) => login(d.user, d.pass),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );
  const { refetch, data: projects } = useQuery(
    ["projects"],
    ({ meta }) => {
      const token = meta && meta?.token;
      console.log("callback", token);
      return token ? getProjectsList(token) : Promise.resolve([]);
    },
    { meta: { token } }
  );

  console.log(token);

  if (!token) {
    return (
      <div className="App">
        <TextField
          label="username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          label="password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <Button onClick={() => mutate({ user, pass })}>Login</Button>
      </div>
    );
  }

  return (
    <div className="App">
      <Select>
        {projects &&
          projects.map((project) => (
            <MenuItem value={project.id}>{project.name}</MenuItem>
          ))}
      </Select>
    </div>
  );
}

export default () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
