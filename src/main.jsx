import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { ThemeProvider } from "./lib/context/theme-provider.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./lib/components/elements/navbar.jsx";
import FeedPage from "./routes/home.jsx";
import ArchivePage from "./routes/archive.jsx";
import { Toaster } from "./lib/components/ui/sonner";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="max-w-6xl w-full mx-auto relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archives" element={<Archive />} />
          </Routes>
        </div>
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
