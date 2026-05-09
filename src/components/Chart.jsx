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
    <div className="w-full min-w-0">

      {/* Heading */}
      <h2
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          libre-font
          mb-6
          md:mb-10
        "
      >
        Progress Pillars
      </h2>

      {/* Chart Wrapper */}
      <div
        className="
          w-full
          h-[280px]
          sm:h-[360px]
          md:h-[420px]
        "
      >

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: -25,
              bottom: 5,
            }}
            barCategoryGap="25%"
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
              tick={{ fontSize: 12 }}
            />

            {/* Y Axis */}
            <YAxis
              stroke="#a1a1aa"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
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
              radius={[20, 20, 0, 0]}
              barSize={window.innerWidth < 640 ? 28 : 50}
              fill="url(#moonGlow)"
              filter="url(#glow)"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}