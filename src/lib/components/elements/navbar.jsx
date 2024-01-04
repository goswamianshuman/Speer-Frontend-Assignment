import React from "react";
import { ModeToggle } from "../others/mode-toggle";
import { useLocation, matchPath } from "react-router-dom";

const navLinks = [
  {
    title: "Feeds",
    href: "/",
  },
  {
    title: "Archives",
    href: "/archives",
  },
];

const Navbar = () => {
  let location = useLocation();

  return (
    <header className="fixed top-3 inset-x-0 max-w-md md:max-w-3xl w-full mx-auto py-2 rounded-md backdrop-filter backdrop-blur-sm bg-foreground/5 flex items-center justify-between px-5 z-[99999]">
      <nav className="flex items-center gap-x-5">
        {navLinks.map((data, i) => (
          <a
            key={i}
            className={`${
              location.pathname == data.href
                ? "bg-purple-500"
                : "hover:bg-purple-500/30"
            } px-4 py-1 rounded-md transition-all ease-linear duration-200`}
            href={data.href}
          >
            {data.title}
          </a>
        ))}
      </nav>
      <ModeToggle />
    </header>
  );
};

export default Navbar;
