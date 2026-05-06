import { useStore } from "../store/useStore";
import { calculateStreak } from "../utils/streak";

export default function Stats() {
  const logs = useStore((state) => state.logs);

  const total = logs.reduce((sum, log) => sum + log.hours, 0);

  const streak = calculateStreak(logs);

  return (
    <div>
      <h2>Total Hours: {total}</h2>
      <h3>Entries: {logs.length}</h3>

      <h2>🔥 Current Streak: {streak} days</h2>
    </div>
  );
}