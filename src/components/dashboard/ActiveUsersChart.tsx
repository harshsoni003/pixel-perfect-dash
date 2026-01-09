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
      {/* Title First for better hierarchy */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          <h3 className="text-xl font-bold tracking-tight text-slate-900">Risk Vectors</h3>
        </div>
        <p className="text-sm font-medium text-slate-500">Root cause analysis for system delays</p>
      </div>

      {/* Chart */}
      <div className="h-28 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={delayData} layout="vertical" margin={{ left: -40, right: 10 }}>
            <XAxis type="number" hide domain={[0, 60]} />
            <Bar dataKey="impact" radius={[0, 10, 10, 0]} barSize={12}>
              {delayData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#2563eb' : index === 1 ? '#3b82f6' : '#64748b'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Stats Grid */}
      <div className="space-y-4">
        {delayData.map((item, index) => (
          <motion.div
            key={item.reason}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: index === 0 ? '#2563eb' : index === 1 ? '#3b82f6' : '#64748b' }}
              />
              <span className="text-sm font-bold text-slate-600 group-hover:text-primary transition-colors">{item.reason}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-400">IMPACT</span>
              <span className="text-sm font-black text-slate-900">{item.impact}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
