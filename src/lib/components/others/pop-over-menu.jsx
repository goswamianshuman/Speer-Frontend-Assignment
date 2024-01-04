import {
  MoreVertical,
  Archive,
  ArchiveRestore as UnArchive,
} from "lucide-react";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useTrigger } from "@/lib/hooks/useTrigger";

const PopOverMenu = ({ archived, id }) => {
  const trigger = useTrigger();
  const archiveFeed = async () => {
    try {
      const data = { is_archived: true };
      await fetch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res) {
          trigger.activate();
          toast("Archived Feed Successfully");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const unArchiveFeed = async () => {
    try {
      const data = { is_archived: false };
      await fetch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res) {
          trigger.activate();
          toast("Unarchived Feed Successfully");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Popover>
      <PopoverTrigger>
        <MoreVertical className="h-4 w-4 text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent className="max-w-max rounded-md bg-transparent shadow-none outline-none border-none">
        <div className="flex flex-col items-center justify-center gap-y-2">
          {archived === false ? (
            <Button
              onClick={archiveFeed}
              className="w-full flex items-center gap-x-2"
            >
              <Archive className="h-4 w-4" /> archive
            </Button>
          ) : (
            <Button
              onClick={unArchiveFeed}
              className="flex items-center gap-x-2"
            >
              <UnArchive className="h-4 w-4" /> unarchive
            </Button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopOverMenu;
