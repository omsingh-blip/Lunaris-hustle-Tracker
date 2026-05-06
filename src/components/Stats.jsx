import { useStore } from "../store/useStore";
import { calculateStreak } from "../utils/streak";

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
    <div>
      <h2>Total Hours: {total}</h2>

      <h2>🔥 Streak: {streak} days</h2>

      <h3>
        Today: {todayHours} / {dailyGoal} hrs
      </h3>

      <div
        style={{
          width: "300px",
          height: "20px",
          background: "#ddd",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "black",
          }}
        />
      </div>
    </div>
  );
}