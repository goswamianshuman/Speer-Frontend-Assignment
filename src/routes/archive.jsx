import React from "react";
import { Loader } from "@/lib/components/elements/loader";
import CallerCard from "@/lib/components/others/caller-card";
import { useTrigger } from "@/lib/hooks/useTrigger";
import { useEffect, useState } from "react";
import { Label } from "@/lib/components/ui/label";

export default function ArchivePage() {
  const [data, setData] = useState([]);
  const [archived, setArchived] = useState(true);
  const trigger = useTrigger();

  const fetchData = async () => {
    try {
      await fetch("https://cerulean-marlin-wig.cyclic.app/activities")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          checkArchived();
        });
    } catch (error) {
      console.log(error);
    }
  };

  const checkArchived = () => {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].is_archived === false) {
        count = count + 1;
      }
    }
    if (count != data.length) {
      setArchived(false);
    } else {
      setArchived(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [trigger.active, data]);

  if (data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size={"sm"} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container max-w-6xl w-full mx-auto mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center place-items-center gap-3">
        {archived ? (
          <>
            {data.map((item, id) => (
              <React.Fragment key={id}>
                {item.is_archived === true && <CallerCard data={item} />}
              </React.Fragment>
            ))}
          </>
        ) : (
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <Label>No Chats are Archived!!</Label>
          </div>
        )}
      </div>
    </div>
  );
}
