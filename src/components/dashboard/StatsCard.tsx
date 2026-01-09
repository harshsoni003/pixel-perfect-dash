import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
  index?: number;
}

export const StatsCard = ({ title, value, change, isPositive, icon: Icon, index = 0 }: StatsCardProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 + index * 0.1 }}
      className="glass-card p-4 hover-lift"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground mb-1">{title}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-foreground">{value}</span>
            <span className={`text-xs font-medium ${isPositive ? "text-success" : "text-destructive"}`}>
              {change}
            </span>
          </div>
        </div>
        <div className="stat-icon">
          <Icon className="h-5 w-5 text-foreground" />
        </div>
      </div>
    </motion.div>
  );
};
