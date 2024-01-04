import React from "react";
import { PhoneOutgoing, PhoneIncoming, Phone } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "../ui/badge";
import ArchiveToolTip from "./archive-tool-tip";

const CallerCard = ({ data }) => {
  const { direction, from, to, is_archived, call_type, id, created_at } = data;

  const date = new Date(created_at);
  const formattedDate = format(date, "do MMMM yyyy • hh:mm a");

  return (
    <div className="bg-primary-foreground w-full border-[2px] border-purple-500 rounded-xl px-4 py-3 cursor-pointer">
      <div className="flex items-center justify-between text-xs font-mono tracking-wide text-muted-foreground">
        <p className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r uppercase from-purple-500 to-fuchsia-500">
          {direction === "inbound" && "Incoming"}
          {direction === "outbound" && "Outgoing"}
        </p>

        <div className="flex items-center justify-end gap-x-2">
          •
          {is_archived === true && (
            <>
              <ArchiveToolTip />•{" "}
            </>
          )}
          {/* call_type */}
          <Badge
            variant={"default"}
            className={`${
              (call_type === "missed" && "bg-red-500 text-white") ||
              (call_type === "voicemail" && "bg-blue-500 text-white") ||
              (call_type === "answered" && "bg-green-500 text-white")
            }`}
          >
            {call_type ? call_type : "null"}
          </Badge>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-x-4">
          {/* caller-icon  */}
          <div>
            {(direction === "inbound" && (
              <PhoneIncoming className="h-5 w-5 text-muted-foreground" />
            )) ||
              (direction === "outbound" && (
                <PhoneOutgoing className="h-5 w-5 text-muted-foreground" />
              )) || <Phone className="h-5 w-5 text-muted-foreground" />}
          </div>

          <div className="">
            {/* from */}
            <p className="text-lg leading-5">
              {" "}
              Call from {from ? from : "unknown"}
            </p>
            {/* to */}
            <p className="text-muted-foreground text-sm">
              for {to ? to : "unknown"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-x-1 mt-6">
        <p className="text-xs font-mono tracking-tighter text-muted-foreground">
          {formattedDate}
        </p>
      </div>
    </div>
  );
};

export default CallerCard;
