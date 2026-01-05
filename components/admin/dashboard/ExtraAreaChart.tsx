"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface ChartData {
  name: string;
  red: number;
  yellow: number;
  green: number;
}

// Sample data: start from 20
const data: ChartData[] = [
  { name: "Jan", red: 20, yellow: 20, green: 20 },
  { name: "Feb", red: 40, yellow: 35, green: 30 },
  { name: "Mar", red: 60, yellow: 50, green: 40 },
  { name: "Apr", red: 80, yellow: 70, green: 60 },
  { name: "May", red: 90, yellow: 85, green: 80 },
  { name: "Jun", red: 100, yellow: 95, green: 90 },
];

export default function ExtraAreaChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 40, right: 20, left: 0, bottom: 0 }}
      >
        {/* Grid */}
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />

        {/* X-Axis: Months */}
        <XAxis
          dataKey="name"
          tick={{ fill: "#374151", fontSize: 14, fontWeight: 500 }}
        />

        {/* Y-Axis: 0 → 100 */}
        <YAxis
          type="number"
          domain={[0, 100]}
          ticks={[0, 20, 40, 60, 80, 100]}
          tick={{ fill: "#374151", fontSize: 14, fontWeight: 500 }}
        />

        {/* Tooltip */}
        <Tooltip
          contentStyle={{
            backgroundColor: "#f9fafb",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
          }}
        />

        {/* RED CURVE */}
        <Area
          type="monotone"
          dataKey="red"
          stroke="#ef4444"
          fill="#ef4444"
          fillOpacity={0.1}
          strokeWidth={3}
          dot={{ r: 4, fill: "#b91c1c" }}
        />

        {/* YELLOW CURVE */}
        <Area
          type="monotone"
          dataKey="yellow"
          stroke="#facc15"
          fill="#facc15"
          fillOpacity={0.2}
          strokeWidth={3}
          dot={{ r: 4, fill: "#b45309" }}
        />

        {/* GREEN CURVE */}
        <Area
          type="monotone"
          dataKey="green"
          stroke="#22c55e"
          fill="#22c55e"
          fillOpacity={0.2}
          strokeWidth={3}
          dot={{ r: 4, fill: "#15803d" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
