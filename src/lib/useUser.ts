import { User } from "firebase/auth";
import useLocalStorageState from "use-local-storage-state";

export default function useUser() {
  return useLocalStorageState<User>("user");
}
