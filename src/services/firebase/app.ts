import { initializeApp } from "firebase/app";
import getEnvValue from "@lib/getEnvValue";
import { getFirestore } from "firebase/firestore";

const e = (k: string) => getEnvValue<string>(k);

const firebaseConfig = {
  apiKey: e("VITE_FIREBASE_API_KEY"),
  authDomain: e("VITE_FIREBASE_AUTH_DOMAIN"),
  projectId: e("VITE_FIREBASE_PROJECT_ID"),
  storageBucket: e("VITE_FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: e("VITE_FIREBASE_MESSAGING_SENDER_ID"),
  appId: e("VITE_FIREBASE_APP_ID"),
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
