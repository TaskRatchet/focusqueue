import Button from "@mui/material/Button";
import {
  loginWithGoogle,
  useAuthenticatedUser,
  logout,
  loginWithGithub,
} from "@services/firebase/auth";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import { DialogContent } from "@mui/material";
import { useState } from "react";

export default function AuthControls() {
  const user = useAuthenticatedUser();
  const [open, setOpen] = useState(false);

  return user ? (
    <Button variant="contained" color="secondary" onClick={logout}>
      Logout
    </Button>
  ) : (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Login
      </Button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogContent>
          <Stack spacing={2}>
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
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}
