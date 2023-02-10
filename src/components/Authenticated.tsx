import { useAuthenticatedUser } from "../lib/firebase/auth";

export default function Authenticated({
  children,
}: {
  children: JSX.Element | null;
}) {
  const user = useAuthenticatedUser();

  return user ? children : <>Please log in.</>;
}
