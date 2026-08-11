// Server-only entry used by the Vite prerender plugin (never bundled for the client).
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppRoutes } from "./App";

export function renderApp(location: string): string {
  return renderToString(
    <StaticRouter location={location}>
      <AppRoutes />
    </StaticRouter>,
  );
}
