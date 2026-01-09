import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, Cell } from "recharts";

const delayData = [
  { reason: "Customs Hold", impact: 45, color: "#0075FF" },
  { reason: "Weather", impact: 30, color: "#00C6FB" },
  { reason: "Port Congestion", impact: 25, color: "#6C63FF" },
];

export const DelayRootCausesChart = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.45 }}
      className="glass-card p-5"
    >
      {/* Chart */}
      <div className="h-32 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={delayData} layout="vertical">
            <XAxis type="number" hide domain={[0, 50]} />
            <Bar dataKey="impact" radius={[0, 4, 4, 0]}>
              {delayData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Title */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          <h3 className="text-lg font-semibold text-foreground">Delay Root Causes</h3>
        </div>
        <p className="text-sm text-muted-foreground">Impact analysis for late shipments</p>
      </div>

      {/* Stats Grid */}
      <div className="space-y-3">
        {delayData.map((item, index) => (
          <motion.div
            key={item.reason}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-foreground">{item.reason}</span>
            </div>
            <span className="text-sm font-bold text-foreground">{item.impact}%</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
