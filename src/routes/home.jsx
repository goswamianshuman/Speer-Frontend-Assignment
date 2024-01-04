import CallerCard from "@/lib/components/others/caller-card";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

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
  }, []);

  console.log(data);

  return (
    <div className="min-h-screen">
      <div className="container max-w-6xl w-full mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center place-items-center gap-3">
        {data.map((data, i) => (
          <CallerCard key={i} data={data} />
        ))}
      </div>
    </div>
  );
}
