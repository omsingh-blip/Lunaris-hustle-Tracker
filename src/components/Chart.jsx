import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { useStore } from "../store/useStore";
import dayjs from "dayjs";

export default function ChartComponent() {
  const logs = useStore((state) => state.logs);

  // Group logs day-wise
  const groupedData = {};

  logs.forEach((log) => {
    const day = dayjs(log.date).format("DD MMM");

    if (!groupedData[day]) {
      groupedData[day] = 0;
    }

    groupedData[day] += log.hours;
  });

  const chartData = Object.keys(groupedData).map((day) => ({
    day,
    hours: groupedData[day],
  }));

  return (
    <div className="w-full">

      <h2 className="text-5xl libre-font mb-10">
        Progress Pillars
      </h2>

      <div className="w-full h-[420px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              left: -20,
              bottom: 20,
            }}
            barCategoryGap="40%"
          >

            {/* Glow + Gradient */}
            <defs>

              <linearGradient
                id="moonGlow"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#ffffff"
                />

                <stop
                  offset="100%"
                  stopColor="#d4d4d8"
                />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur
                  stdDeviation="6"
                  result="coloredBlur"
                />

                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

            </defs>

            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
            />

            {/* X Axis */}
            <XAxis
              dataKey="day"
              stroke="#a1a1aa"
              tickLine={false}
              axisLine={false}
            />

            {/* Y Axis */}
            <YAxis
              stroke="#a1a1aa"
              tickLine={false}
              axisLine={false}
            />

            {/* Tooltip */}
            <Tooltip
              cursor={{
                fill: "rgba(255,255,255,0.03)",
              }}
              contentStyle={{
                background: "#09090B",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                color: "white",
              }}
            />

            {/* Bars */}
            <Bar
              dataKey="hours"
              radius={[30, 30, 0, 0]}
              barSize={70}
              fill="url(#moonGlow)"
              filter="url(#glow)"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}