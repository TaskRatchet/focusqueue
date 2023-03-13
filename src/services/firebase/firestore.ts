import { getAuth } from "firebase/auth";
import {
  doc,
  updateDoc,
  onSnapshot,
  UpdateData,
  collection,
  addDoc,
} from "firebase/firestore";
import app, { db } from "./app";
import { useEffect, useMemo, useState } from "react";

function getCurrentUser() {
  const auth = getAuth(app);

  if (auth.currentUser) return auth.currentUser;

  throw new Error("updateMe: user is not authenticated");
}

export function addTask(data: UpdateData<unknown>) {
  const user = getCurrentUser();
  const tasks = collection(db, "users", user.uid, "tasks");

  return addDoc(tasks, data);
}

export function addSession(taskId: string, data: UpdateData<unknown>) {
  const user = getCurrentUser();
  const sessions = collection(
    db,
    "users",
    user.uid,
    "tasks",
    taskId,
    "sessions"
  );

  return addDoc(sessions, data);
}

export function updateMe(data: UpdateData<unknown>) {
  const user = getCurrentUser();
  const docRef = doc(db, "users", user.uid);

  return updateDoc(docRef, data);
}

export function useMe(): undefined | Record<string, unknown> {
  const user = getCurrentUser();
  const docRef = useMemo(() => doc(db, "users", user.uid), [user]);
  const [me, setMe] = useState<Record<string, unknown>>();

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (doc) => {
      setMe(doc.data());
    });

    return unsubscribe;
  }, [docRef]);

  return me;
}
