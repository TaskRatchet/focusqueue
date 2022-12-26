import app from "./app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  Timestamp,
  query,
  where,
} from "firebase/firestore";
import { useState, useMemo, useEffect } from "react";

const getDb = () => getFirestore(app);

type Task = {
  id: string;
  title: string;
  created: Timestamp;
  updated: Timestamp;
  completed: Timestamp | null;
  deleted: Timestamp | null;
  estimates: [Timestamp, number][];
  sessions: [Timestamp, number][];
  breaks: [Timestamp, number][];
  notes: string;
  tags: string[];
};

type TaskInput = {
  title: string;
} & Partial<Task>;

export function useTasks(userId?: string): Task[] {
  const [tasks, setTasks] = useState<Task[]>([]);
  const db = useMemo(getDb, []);
  const q = useMemo(() => {
    if (!userId) return null;
    return query(
      collection(db, `users/${userId}/tasks`),
      where("deleted", "==", null),
      where("completed", "==", null)
    );
  }, [userId]);

  const unsub = useMemo(() => {
    if (!q)
      return () => {
        /* noop */
      };
    return onSnapshot(q, (querySnapshot) => {
      const tasks: Task[] = querySnapshot.docs.map((doc): Task => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
        } as Task;
      });
      setTasks(tasks);
    });
  }, [q, db, userId]);

  useEffect(() => {
    return () => unsub();
  }, [unsub]);

  return tasks;
}

export function addTask(userId: string, task: TaskInput) {
  const db = getDb();
  const tasks = collection(db, `users/${userId}/tasks`);

  const data: Omit<Task, "id"> = {
    created: Timestamp.now(),
    updated: Timestamp.now(),
    completed: null,
    deleted: null,
    estimates: [],
    sessions: [],
    breaks: [],
    notes: "",
    tags: [],
    ...task,
  };

  return addDoc(tasks, data);
}

export function updateTask(
  userId: string,
  taskId: string,
  taskUpdates: Partial<Task>
) {
  const db = getDb();
  const tasks = collection(db, `users/${userId}/tasks`);
  const task = doc(tasks, taskId);
  return updateDoc(task, taskUpdates);
}
