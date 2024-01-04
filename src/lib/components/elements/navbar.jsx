import React, { useEffect, useState } from "react";
import { ModeToggle } from "../others/mode-toggle";
import { useLocation } from "react-router-dom";
import { useTrigger } from "@/lib/hooks/useTrigger";
import { Button } from "../ui/button";
import { RotateCcw, Package } from "lucide-react";
import { toast } from "sonner";

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
  const [data, setData] = useState([]);
  const trigger = useTrigger();

  useEffect(() => {
    fetchData();
  }, [trigger.active]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cerulean-marlin-wig.cyclic.app/activities"
      );
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  const archiveSingle = async (id) => {
    const archiveData = { is_archived: true };

    try {
      const response = await fetch(
        `https://cerulean-marlin-wig.cyclic.app/activities/${id}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(archiveData),
        }
      );

      if (response.ok) {
        trigger.activate();
        toast("Item Archived Successfully");
      }
    } catch (error) {
      console.error("Error archiving item:", error);
    }
  };

  const archiveAll = async () => {
    try {
      for (const item of data) {
        await archiveSingle(item.id);
      }
      toast("All Items Archived Successfully");
    } catch (error) {
      console.error("Error archiving all items:", error);
    }
  };

  const resetAll = async () => {
    try {
      await fetch(`https://cerulean-marlin-wig.cyclic.app/reset`, {
        method: "PATCH",
      }).then((res) => {
        if (res) {
          trigger.activate();
          toast("All calls have been reset.");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="fixed top-3 inset-x-0 max-w-md md:max-w-3xl w-full mx-auto py-2 rounded-md backdrop-filter backdrop-blur-sm bg-foreground/5 flex items-center justify-between px-5 z-[99999]">
      <nav className="flex items-center gap-x-5">
        {navLinks.map((data, i) => (
          <a
            onClick={() => trigger.activate()}
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
      <div className="flex items-center gap-x-2">
        {location.pathname === "/" && (
          <Button
            onClick={archiveAll}
            variant="ghost"
            size="sm"
            className="flex uppercase items-center justify-center gap-x-2"
          >
            <Package className="h-4 w-4" />
            Archive All
          </Button>
        )}
        <Button
          onClick={resetAll}
          variant="ghost"
          size="sm"
          className="flex uppercase items-center justify-center gap-x-2"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
