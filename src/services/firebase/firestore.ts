import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  UpdateData,
} from "firebase/firestore";
import app from "./app";
import { useEffect, useMemo, useState } from "react";

export function updateMe(data: UpdateData<unknown>) {
  const auth = getAuth(app);
  const user = auth.currentUser;
  if (!user) {
    throw new Error("updateMe: user is not authenticated");
  }
  const firestore = getFirestore(app);
  const docRef = doc(firestore, "users", user.uid);

  return updateDoc(docRef, data);
}

export function useMe(): undefined | Record<string, unknown> {
  const auth = getAuth(app);
  const user = auth.currentUser;
  if (!user) {
    throw new Error("useMe: user is not authenticated");
  }

  const firestore = getFirestore(app);
  const docRef = useMemo(() => doc(firestore, "users", user.uid), [user]);
  const [me, setMe] = useState<Record<string, unknown>>();

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (doc) => {
      setMe(doc.data());
    });

    return unsubscribe;
  }, [docRef]);

  return me;
}
