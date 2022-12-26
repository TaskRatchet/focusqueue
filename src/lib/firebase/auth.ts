import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { useEffect, useMemo, useState } from "react";
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

export function logout() {
  const auth = getAuth(app);
  auth.signOut();
}

export function useAuthenticatedUser() {
  const [user, setUser] = useState<User | null>(null);
  const auth = useMemo(() => getAuth(app), [app]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  return user;
}
