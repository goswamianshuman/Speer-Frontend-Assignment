import React from "react";
import CallerCard from "@/lib/components/others/caller-card";
import { useTrigger } from "@/lib/hooks/useTrigger";
import { useEffect, useState } from "react";

export default function ArchivePage() {
  const [data, setData] = useState([]);
  const trigger = useTrigger();

  const fetchData = async () => {
    try {
      await fetch("https://cerulean-marlin-wig.cyclic.app/activities")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [trigger.active, data]);

  if (data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-md">No Archived data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container max-w-6xl w-full mx-auto mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center place-items-center gap-3">
        {data.map((item, id) => (
          <React.Fragment key={id}>
            {item.is_archived === true && <CallerCard data={item} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
