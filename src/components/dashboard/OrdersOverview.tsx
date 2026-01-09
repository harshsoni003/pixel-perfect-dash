import { motion } from "framer-motion";
import { TrendingUp, FileText, AlertCircle, CheckCircle, Clock, Package } from "lucide-react";

const activities = [
  {
    icon: FileText,
    title: "BOL #4521 processed",
    subtitle: "Auto-extracted 24 fields",
    time: "2 min ago",
    color: "#0075FF",
  },
  {
    icon: AlertCircle,
    title: "Customs hold detected",
    subtitle: "Shipment LAX-2341",
    time: "15 min ago",
    color: "#EF4444",
  },
  {
    icon: CheckCircle,
    title: "Delivery confirmed",
    subtitle: "Order #8823 - DFW",
    time: "1 hr ago",
    color: "#22C55E",
  },
  {
    icon: Clock,
    title: "ETA updated",
    subtitle: "3 shipments rescheduled",
    time: "2 hrs ago",
    color: "#00C6FB",
  },
  {
    icon: Package,
    title: "New shipment created",
    subtitle: "CHI → NYC priority",
    time: "3 hrs ago",
    color: "#0075FF",
  },
];

export const RecentActivityFeed = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.55 }}
      className="glass-card p-5 h-full"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-success" />
          <span className="text-sm text-success font-medium">142 active</span>
          <span className="text-sm text-muted-foreground">shipments</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30" />

        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-start gap-4 relative"
            >
              {/* Icon */}
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center z-10 flex-shrink-0"
                style={{ backgroundColor: activity.color }}
              >
                <activity.icon className="h-3 w-3 text-foreground" />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.subtitle}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
