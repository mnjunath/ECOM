import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Dashboard() {
  const { user, sessionExpiry } = useSelector(
    (state) => state.auth
  );

  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sessionExpiry) {
        const seconds = Math.max(
          0,
          Math.floor((sessionExpiry - Date.now()) / 1000)
        );
        setRemainingTime(seconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sessionExpiry]);

  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">
        Welcome back,
      </h1>

      <h2 className="text-3xl text-neutral-700 mb-10">
        {user?.name}
      </h2>

      <div className="bg-white border border-neutral-200 p-8 max-w-md">
        <p className="text-neutral-600 uppercase text-xs tracking-wider mb-2">
          Session Remaining
        </p>

        <p className="text-4xl font-bold">
          {remainingTime}s
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
