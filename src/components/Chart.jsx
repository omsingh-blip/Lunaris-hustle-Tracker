import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { useStore } from "../store/useStore";

export default function ChartComponent() {
  const logs = useStore((state) => state.logs);

  return (
    <BarChart width={500} height={300} data={logs}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="hours" />
    </BarChart>
  );
}