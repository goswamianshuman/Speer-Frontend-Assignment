import React from "react";
import ReactDOM from "react-dom/client";
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
import Navbar from "./lib/components/elements/navbar.jsx";
import FeedPage from "./routes/home.jsx";
import ArchivePage from "./routes/archive.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <div className="max-w-6xl w-full mx-auto relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/archives" element={<ArchivePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </ThemeProvider>
);
