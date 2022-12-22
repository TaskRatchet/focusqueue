import { initializeApp } from "firebase/app";
import getEnvValue from "../getEnvValue";

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

export default app;
