import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
