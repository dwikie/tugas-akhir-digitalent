import { Redirect, Route } from "react-router-dom";

export default function AuthenticatedRoute({
  children,
  isAuthenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to="/" />)}
    />
  );
}
