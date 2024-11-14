import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface MetricChartProps {
  title: string;
  data: Array<{ timestamp: string; value: number }>;
  color: string;
  unit: string;
}

const MetricChart = ({ title, data, color, unit }: MetricChartProps) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 p-4 animate-slide-up">
      <h3 className="font-medium text-neutral-800 mb-4">{title}</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis
              dataKey="timestamp"
              tick={{ fontSize: 12, fill: "#71717A" }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#71717A" }}
              tickLine={false}
              axisLine={false}
              unit={unit}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E4E4E7",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
              animationDuration={1000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MetricChart;