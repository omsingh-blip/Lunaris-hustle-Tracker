import { useStore } from "../store/useStore";
import { calculateStreak } from "../utils/streak";
import MoonProgress from "./MoonProgress";

export default function Stats() {
  const logs = useStore((state) => state.logs);

  const total = logs.reduce((sum, log) => sum + log.hours, 0);

  const streak = calculateStreak(logs);

  const dailyGoal = 8;

  const today = new Date().toISOString().split("T")[0];

  const todayHours = logs
    .filter((log) => log.date.startsWith(today))
    .reduce((sum, log) => sum + log.hours, 0);

  const progress = Math.min((todayHours / dailyGoal) * 100, 100);

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Left */}
      <div>
        <h2 className="text-4xl libre-font mb-6">
          Tonight's Progress
        </h2>

        <div className="space-y-4 text-zinc-300">
          <p>🔥 Streak: {streak} days</p>
          <p>⏱ Total Hours: {total}</p>
          <p>
            🌙 Today: {todayHours} / {dailyGoal} hrs
          </p>
        </div>
      </div>

      {/* Right */}
      <MoonProgress progress={progress} />

    </div>
  );
}