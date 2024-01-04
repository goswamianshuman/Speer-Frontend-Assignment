import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { format } from "date-fns";
import { useTrigger } from "@/lib/hooks/useTrigger";

const InfoTable = ({ id }) => {
  //   const {
  //     id,
  //     created_at,
  //     direction,
  //     from,
  //     to,
  //     via,
  //     duration,
  //     is_archived,
  //     call_type,
  //   } = data;

  const [data, setData] = useState({
    id: "",
    created_at: "",
    direction: "",
    from: "",
    to: "",
    via: "",
    duration: "",
    is_archived: "",
    call_type: "",
  });

  const fetchSingleFeed = async () => {
    try {
      await fetch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleFeed();
  }, []);

  const date = new Date(data.created_at);
  const formattedDate = JSON.stringify(date);

  return (
    <Table>
      <TableCaption>Here are the details of perticular call feed</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Details</TableHead>
          <TableHead>Data</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Id</TableCell>
          <TableCell>{data.id}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Creation Date</TableCell>
          <TableCell>{formattedDate}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Direction</TableCell>
          <TableCell>
            {(data.direction === "inbound" && "Incomming") ||
              (data.direction === "outbound" && "Outgoing") ||
              "Unknown"}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Caller's Number</TableCell>
          <TableCell>{data.from}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Callee's Number</TableCell>
          <TableCell>{data.to}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Aircall's Number</TableCell>
          <TableCell>{data.via}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Call Duration</TableCell>
          <TableCell>{data.duration} seconds</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Archived</TableCell>
          <TableCell>{data.is_archived === true ? "yes" : "no"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Type of call</TableCell>
          <TableCell>{data.call_type}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default InfoTable;
