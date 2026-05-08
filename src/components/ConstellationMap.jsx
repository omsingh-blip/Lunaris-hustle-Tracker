import { useStore } from "../store/useStore";
import dayjs from "dayjs";

export default function ConstellationMap() {
  const logs = useStore((state) => state.logs);

  // Group logs by date
  const groupedData = {};

  logs.forEach((log) => {
    const day = dayjs(log.date).format("YYYY-MM-DD");

    if (!groupedData[day]) {
      groupedData[day] = 0;
    }

    groupedData[day] += log.hours;
  });

  // Last 30 days
  const days = [];

  for (let i = 29; i >= 0; i--) {
    const date = dayjs().subtract(i, "day");

    const formatted = date.format("YYYY-MM-DD");

    days.push({
      date: formatted,
      hours: groupedData[formatted] || 0,
    });
  }

  // Star glow intensity
  const getGlow = (hours) => {
    if (hours >= 8)
      return "bg-white shadow-[0_0_25px_rgba(255,255,255,0.9)] scale-125";

    if (hours >= 5)
      return "bg-zinc-200 shadow-[0_0_18px_rgba(255,255,255,0.6)]";

    if (hours >= 2)
      return "bg-zinc-400 shadow-[0_0_10px_rgba(255,255,255,0.3)]";

    if (hours > 0)
      return "bg-zinc-600";

    return "bg-white/5";
  };

  return (
    <div>

      {/* Title */}
      <div className="mb-10">

        <h2 className="text-5xl libre-font mb-4">
          Constellation Map
        </h2>

        <p className="text-zinc-400">
          Every productive night becomes a star.
        </p>

      </div>

      {/* Stars */}
      <div className="grid grid-cols-6 md:grid-cols-10 gap-6">

        {days.map((day, index) => (

          <div
            key={index}
            className="group relative flex items-center justify-center"
          >

            {/* Star */}
            <div
              className={`
                w-4
                h-4
                rounded-full
                transition-all
                duration-500
                ${getGlow(day.hours)}
              `}
            />

            {/* Tooltip */}
            <div
              className="
                absolute
                bottom-8
                opacity-0
                group-hover:opacity-100
                transition
                pointer-events-none
                bg-black/90
                border border-white/10
                text-white
                text-xs
                px-3
                py-2
                rounded-xl
                whitespace-nowrap
                z-50
              "
            >
              <p>{dayjs(day.date).format("DD MMM YYYY")}</p>

              <p className="text-zinc-400">
                {day.hours} hrs logged
              </p>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}