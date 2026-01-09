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
      <div className="mb-6">
        <h3 className="text-xl font-bold tracking-tight text-slate-900">System Activity</h3>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex h-1.5 w-1.5 rounded-full bg-success" />
          <span className="text-sm text-slate-500 font-semibold"><span className="text-success font-bold">142</span> active operations</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line - refined */}
        <div className="absolute left-[15px] top-6 bottom-6 w-[1px] bg-slate-100" />

        <div className="space-y-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-start gap-5 relative group"
            >
              {/* Icon Container */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center z-10 flex-shrink-0 shadow-sm border border-white transition-all group-hover:shadow-md"
                style={{ backgroundColor: `${activity.color}15`, color: activity.color }}
              >
                <activity.icon className="h-4 w-4" />
              </div>

              {/* Content Container */}
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-sm font-bold text-slate-900 truncate tracking-tight">{activity.title}</p>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter whitespace-nowrap ml-2 bg-slate-50 px-1.5 py-0.5 rounded">{activity.time}</span>
                </div>
                <p className="text-xs font-medium text-slate-500 line-clamp-1">{activity.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
