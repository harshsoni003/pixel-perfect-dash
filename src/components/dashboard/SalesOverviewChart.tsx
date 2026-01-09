import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const salesData = [
  { month: "Jan", value: 200 },
  { month: "Feb", value: 250 },
  { month: "Mar", value: 300 },
  { month: "Apr", value: 350 },
  { month: "May", value: 300 },
  { month: "Jun", value: 400 },
  { month: "Jul", value: 350 },
  { month: "Aug", value: 450 },
  { month: "Sep", value: 400 },
  { month: "Oct", value: 480 },
  { month: "Nov", value: 450 },
  { month: "Dec", value: 500 },
];

export const SalesOverviewChart = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="glass-card p-5"
    >
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-lg font-semibold text-foreground">Sales overview</h3>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-4 w-4 text-success" />
        <span className="text-sm text-success font-medium">(+5) more</span>
        <span className="text-sm text-muted-foreground">in 2021</span>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0075FF" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#0075FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 20%, 65%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 20%, 65%)", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(228, 47%, 12%)",
                border: "1px solid hsl(228, 30%, 22%)",
                borderRadius: "12px",
                color: "white",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#0075FF"
              strokeWidth={3}
              fill="url(#salesGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
