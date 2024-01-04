import React from "react";

import { ArchiveIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const ArchiveToolTip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <ArchiveIcon className="h-4 w-4" />
        </TooltipTrigger>
        <TooltipContent>
          <p>archived</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ArchiveToolTip;
