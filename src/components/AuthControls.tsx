import Button from "@mui/material/Button";
import {
  loginWithGoogle,
  useAuthenticatedUser,
  logout,
  loginWithGithub,
} from "../lib/firebase/auth";

export default function AuthControls() {
  const user = useAuthenticatedUser();

  return user ? (
    <Button variant="contained" color="primary" onClick={logout}>
      Logout
    </Button>
  ) : (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          loginWithGoogle();
        }}
      >
        Login with Google
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          loginWithGithub();
        }}
      >
        Login with GitHub
      </Button>
    </>
  );
}
