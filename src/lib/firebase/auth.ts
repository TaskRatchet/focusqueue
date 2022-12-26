import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useMemo } from "react";
import app from "./app";

export async function loginWithGoogle() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const credential = GoogleAuthProvider.credentialFromResult(result);

  return {
    ...result,
    credential,
  };
}

// TODO
export function useUser() {
  const auth = useMemo(() => getAuth(app), []);
  return auth.currentUser;
}
