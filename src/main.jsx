import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/home.jsx";
import ErrorPage from "./error-page.jsx";
import "./styles/index.css";
import { ThemeProvider } from "./lib/context/theme-provider.jsx";

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./routes/home.jsx";
import Navbar from "./lib/components/elements/navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <div className="max-w-6xl w-full mx-auto relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/archive" element={<App />} />
        </Routes>
      </div>
    </BrowserRouter>
  </ThemeProvider>
);
