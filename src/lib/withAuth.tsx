import { useAuthenticatedUser } from "../services/firebase/auth";
import React from "react";

export default function withAuth<T>(Component: React.FunctionComponent<T>) {
  const WithAuth = (props: JSX.IntrinsicAttributes & T) => {
    const user = useAuthenticatedUser();

    if (!user) {
      return <div>Not authenticated</div>;
    }

    return <Component {...props} />;
  };

  return WithAuth;
}
