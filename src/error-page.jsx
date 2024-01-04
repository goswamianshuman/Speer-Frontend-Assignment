import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <main
      className="flex items-center justify-center flex-col h-screen"
      id="error-page"
    >
      <h1 className="text-4xl font-bold">Oops!! 😢</h1>
      <h3 className="text-2xl font-semibold mt-6">404</h3>
      <p className="text-lg font-semibold text-muted-foreground mt-2">
        {error.statusText || error.message}
      </p>
    </main>
  );
}
