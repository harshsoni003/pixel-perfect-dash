import { motion } from "framer-motion";
import { TrendingDown } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const freightSpendData = [
  { month: "Aug", value: 120000 },
  { month: "Sep", value: 115000 },
  { month: "Oct", value: 98000 },
];

export const FreightSpendChart = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="glass-card p-5"
    >
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-lg font-semibold text-foreground">Freight Spend Trend</h3>
        <div className="flex items-center gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Cost/Mile: </span>
            <span className="font-bold text-foreground">$2.45</span>
          </div>
          <div>
            <span className="text-muted-foreground">Margin: </span>
            <span className="font-bold text-success">18%</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <TrendingDown className="h-4 w-4 text-success" />
        <span className="text-sm text-success font-medium">-18% spend reduction</span>
        <span className="text-sm text-muted-foreground">vs last quarter</span>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={freightSpendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="freightGradient" x1="0" y1="0" x2="0" y2="1">
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
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 6%)",
                border: "1px solid hsl(228, 30%, 22%)",
                borderRadius: "12px",
                color: "white",
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, "Spend"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#0075FF"
              strokeWidth={3}
              fill="url(#freightGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
