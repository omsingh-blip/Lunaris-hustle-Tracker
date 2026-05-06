import dayjs from "dayjs";

export function calculateStreak(logs) {
  if (!logs.length) return 0;

  // Remove duplicate days
  const uniqueDays = [
    ...new Set(
      logs.map((log) => dayjs(log.date).format("YYYY-MM-DD"))
    ),
  ];

  // Sort newest → oldest
  uniqueDays.sort((a, b) => dayjs(b).unix() - dayjs(a).unix());

  let streak = 1;

  for (let i = 0; i < uniqueDays.length - 1; i++) {
    const current = dayjs(uniqueDays[i]);
    const next = dayjs(uniqueDays[i + 1]);

    const diff = current.diff(next, "day");

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}