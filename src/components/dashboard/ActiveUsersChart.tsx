import { motion } from "framer-motion";
import { Users, MousePointer, DollarSign, ShoppingCart } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";

const barData = [
  { day: "Mon", value: 300 },
  { day: "Tue", value: 450 },
  { day: "Wed", value: 320 },
  { day: "Thu", value: 500 },
  { day: "Fri", value: 380 },
  { day: "Sat", value: 420 },
  { day: "Sun", value: 350 },
  { day: "Mon2", value: 480 },
  { day: "Tue2", value: 390 },
];

const stats = [
  { icon: Users, label: "Users", value: "32,984", color: "#0075FF" },
  { icon: MousePointer, label: "Clicks", value: "2,42m", color: "#00C6FB" },
  { icon: DollarSign, label: "Sales", value: "2,400$", color: "#0075FF" },
  { icon: ShoppingCart, label: "Items", value: "320", color: "#00C6FB" },
];

export const ActiveUsersChart = () => {
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
          <BarChart data={barData}>
            <XAxis dataKey="day" hide />
            <Bar dataKey="value" fill="white" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Title */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Active Users</h3>
        <div className="flex items-center gap-1">
          <span className="text-sm text-success">(+23)</span>
          <span className="text-sm text-muted-foreground">than last week</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="text-center"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
              style={{ backgroundColor: stat.color }}
            >
              <stat.icon className="h-5 w-5 text-foreground" />
            </div>
            <p className="text-sm font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
