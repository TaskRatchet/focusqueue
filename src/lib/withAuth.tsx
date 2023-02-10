import { useAuthenticatedUser } from "./firebase/auth";

export default function withAuth<T>(Component: React.FunctionComponent<T>) {
  return (props: JSX.IntrinsicAttributes & T) => {
    const user = useAuthenticatedUser();

    if (!user) {
      return <div>Not authenticated</div>;
    }

    return <Component {...props} />;
  };
}
