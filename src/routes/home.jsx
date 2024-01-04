import { Loader } from "@/lib/components/elements/loader";
import CallerCard from "@/lib/components/others/caller-card";
import { Button } from "@/lib/components/ui/button";
import { useTrigger } from "@/lib/hooks/useTrigger";
import { useEffect, useState } from "react";

export default function FeedPage() {
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
  }, [data, trigger.active]);

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
        {data.map((data, i) => (
          <CallerCard key={i} data={data} />
        ))}
      </div>
    </div>
  );
}
