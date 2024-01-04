import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ArrowUpRightFromCircle as SelectIcon } from "lucide-react";
import InfoTable from "./info-table";
import { useTrigger } from "@/lib/hooks/useTrigger";

const CardDialog = ({ id }) => {
  const trigger = useTrigger();
  return (
    <Dialog>
      <DialogTrigger>
        <SelectIcon
          onClick={() => {
            trigger.activate();
          }}
          className="h-4 w-4 text-muted-foreground"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Caller specific details</DialogTitle>
          <DialogDescription>
            <InfoTable id={id} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CardDialog;
