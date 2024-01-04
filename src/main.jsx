import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { ThemeProvider } from "./lib/context/theme-provider.jsx";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./lib/components/elements/navbar.jsx";
import FeedPage from "./routes/home.jsx";
import ArchivePage from "./routes/archive.jsx";
import { Toaster } from "./lib/components/ui/sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Router>
      <div className="max-w-6xl w-full mx-auto relative">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<FeedPage />} />
          <Route exact path="/archives" element={<ArchivePage />} />
        </Routes>
      </div>
      <Toaster />
    </Router>
  </ThemeProvider>
);
